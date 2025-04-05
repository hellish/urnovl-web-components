import { Component, Host, Prop, h, State, Method, Event, EventEmitter, Watch } from '@stencil/core';
import '../ur-button-icon/ur-button-icon';
import '../ur-linear-progress/ur-linear-progress';
import '../ur-tooltip/ur-tooltip';

@Component({
    tag: 'ur-player',
    styleUrl: 'ur-player.css',
    shadow: true,
})
export class UrPlayer {
    // Audio element reference
    private audioElement: HTMLAudioElement;

    // HTML audio element reference
    private audioRef?: HTMLAudioElement;

    // Also add this property to the class:
    private element: HTMLElement;

    // Props - Configuration options
    @Prop()
    src: string;

    @Prop()
    storyTitle: string = 'Audiobook Title';

    @Prop()
    author: string = 'Author Name';

    @Prop()
    coverImage: string;

    @Prop()
    chapterName: string = 'Chapter 1';

    @Prop()
    playText: string = 'Play';

    @Prop()
    pauseText: string = 'Pause';

    @Prop()
    forwardText: string = 'Forward 15s';

    @Prop()
    backwardText: string = 'Back 15s';

    @Prop()
    speedText: string = 'Speed';

    @Prop()
    volumeText: string = 'Volume';

    @Prop()
    autoPlay: boolean = false;

    @Prop()
    showControls: boolean = true;

    @Prop()
    primaryColor: string = 'rgb(var(--ur-color-primary))';

    @Prop()
    accentColor: string = 'rgb(var(--ur-color-primary-container))';

    @Prop()
    darkMode: boolean = false;

    // State - Internal component state
    @State()
    isPlaying: boolean = false;

    @State()
    currentTime: number = 0;

    @State()
    duration: number = 0;

    @State()
    loadedPercentage: number = 0;

    @State()
    volume: number = 0.8;

    @State()
    playbackRate: number = 1.0;

    // Events - For communication with parent components
    @Event()
    playerPlay: EventEmitter;

    @Event()
    playerPause: EventEmitter;

    @Event()
    playerEnded: EventEmitter;

    @Event()
    playerTimeUpdate: EventEmitter<{ currentTime: number; duration: number }>;

    @Event()
    playerVolumeChange: EventEmitter<{ volume: number }>;

    @Event()
    playerRateChange: EventEmitter<{ rate: number }>;

    // Watch for src changes
    @Watch('src')
    onSourceChange() {
        if (this.audioElement) {
            this.audioElement.load();
            if (this.autoPlay) {
                this.play();
            }
        }
    }

    // Methods - Public API
    @Method()
    async play() {
        if (this.audioElement) {
            try {
                console.log('Attempting to play audio from:', this.src);
                await this.audioElement.play();
                this.isPlaying = true;
                this.playerPlay.emit();
                console.log('Audio playback started successfully');
            } catch (error) {
                console.error('Failed to play audio:', error);
                // Reset the playing state if there was an error
                this.isPlaying = false;
            }
        } else {
            console.error('Audio element not initialized');
        }
    }

    @Method()
    async pause() {
        if (this.audioElement) {
            this.audioElement.pause();
            this.isPlaying = false;
            this.playerPause.emit();
        }
    }

    @Method()
    async togglePlay() {
        if (this.isPlaying) {
            await this.pause();
        } else {
            await this.play();
        }
    }

    @Method()
    async seekTo(time: number) {
        if (this.audioElement) {
            this.audioElement.currentTime = time;
        }
    }

    @Method()
    async setVolume(value: number) {
        if (this.audioElement) {
            this.volume = Math.max(0, Math.min(1, value));
            this.audioElement.volume = this.volume;
            this.playerVolumeChange.emit({ volume: this.volume });
        }
    }

    @Method()
    async setPlaybackRate(rate: number) {
        if (this.audioElement) {
            this.playbackRate = rate;
            this.audioElement.playbackRate = rate;
            this.playerRateChange.emit({ rate });
        }
    }

    @Method()
    async skipForward(seconds: number = 15) {
        if (this.audioElement) {
            this.audioElement.currentTime = Math.min(this.audioElement.currentTime + seconds, this.audioElement.duration);
        }
    }

    @Method()
    async skipBackward(seconds: number = 15) {
        if (this.audioElement) {
            this.audioElement.currentTime = Math.max(this.audioElement.currentTime - seconds, 0);
        }
    }

    // Lifecycle methods
    componentDidLoad() {
        this.setupAudioElement();

        // Use the audioRef instead of creating a new Audio instance
        if (this.audioRef) {
            this.audioElement = this.audioRef;
            this.audioElement.volume = this.volume;
            this.audioElement.playbackRate = this.playbackRate;

            console.log('Audio element initialized from DOM reference');

            if (this.autoPlay) {
                this.play();
            }
        } else {
            console.error('Audio reference not found in the DOM');
        }
    }

    disconnectedCallback() {
        this.cleanupAudioElement();
    }

    // Event handlers
    private handlePlayPause = () => {
        this.togglePlay();
    };

    private handleSkipForward = () => {
        this.skipForward();
    };

    private handleSkipBackward = () => {
        this.skipBackward();
    };

    private handleProgressClick = (event: MouseEvent) => {
        const progressBar = event.currentTarget as HTMLElement;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = (event.clientX - rect.left) / rect.width;
        this.seekTo(clickPosition * this.duration);
    };

    private handleVolumeChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        this.setVolume(parseFloat(input.value));
    };

    private handlePlaybackRateChange = (rate: number) => {
        this.setPlaybackRate(rate);
    };

    /*
    private toggleSpeedControls = () => {
        this.showSpeedControls = !this.showSpeedControls;
        if (this.showSpeedControls) {
            this.showVolumeControls = false;
        }
    };
    */

    // Helper methods
    private setupAudioElement() {
        // Instead of creating a new Audio() instance programmatically,
        // we'll use an actual audio element in the DOM for better compatibility
        console.log('Setting up audio element with source:', this.src);
    }

    private onError = e => {
        console.error('Audio error:', e);
        console.error('Error code:', this.audioElement.error ? this.audioElement.error.code : 'unknown');
        console.error('Error message:', this.audioElement.error ? this.audioElement.error.message : 'unknown');
    };

    private cleanupAudioElement() {
        if (this.audioElement) {
            this.audioElement.removeEventListener('timeupdate', this.onTimeUpdate);
            this.audioElement.removeEventListener('loadedmetadata', this.onLoadedMetadata);
            this.audioElement.removeEventListener('progress', this.onProgress);
            this.audioElement.removeEventListener('ended', this.onEnded);
            this.audioElement.removeEventListener('play', this.onPlay);
            this.audioElement.removeEventListener('pause', this.onPause);
            this.audioElement.pause();
        }
    }

    private onTimeUpdate = () => {
        this.currentTime = this.audioElement.currentTime;
        this.playerTimeUpdate.emit({
            currentTime: this.currentTime,
            duration: this.duration,
        });
    };

    private onLoadedMetadata = () => {
        this.duration = this.audioElement.duration;
    };

    private onProgress = () => {
        if (this.audioElement.buffered.length > 0) {
            const bufferedEnd = this.audioElement.buffered.end(this.audioElement.buffered.length - 1);
            this.loadedPercentage = (bufferedEnd / this.duration) * 100;
        }
    };

    private onEnded = () => {
        this.isPlaying = false;
        this.playerEnded.emit();
    };

    private onPlay = () => {
        this.isPlaying = true;
    };

    private onPause = () => {
        this.isPlaying = false;
    };

    private formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Add these new methods to the class:
    private isDragging: boolean = false;

    private handleThumbMouseDown = (event: MouseEvent) => {
        event.stopPropagation();
        this.isDragging = true;
        document.addEventListener('mousemove', this.handleThumbMouseMove);
        document.addEventListener('mouseup', this.handleThumbMouseUp);
    };

    private handleThumbMouseMove = (event: MouseEvent) => {
        if (!this.isDragging) return;

        const progressBar = this.element.shadowRoot.querySelector('.progress-bar') as HTMLElement;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        this.seekTo(clickPosition * this.duration);
    };

    private handleThumbMouseUp = () => {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.handleThumbMouseMove);
        document.removeEventListener('mouseup', this.handleThumbMouseUp);
    };

    render() {
        const themeClass = this.darkMode ? 'dark-theme' : 'light-theme';

        return (
            <Host class={themeClass} ref={el => (this.element = el as HTMLElement)}>
                {/* Include an actual audio element in the DOM */}
                <audio
                    ref={el => (this.audioRef = el as HTMLAudioElement)}
                    src={this.src}
                    preload="auto"
                    onTimeUpdate={this.onTimeUpdate}
                    onLoadedMetaData={this.onLoadedMetadata}
                    onProgress={this.onProgress}
                    onEnded={this.onEnded}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    onError={this.onError}
                    style={{ display: 'none' }}
                ></audio>
                <div class="player-container">
                    <div class="player-header">
                        {this.coverImage && (
                            <div class="cover-image">
                                <img src={this.coverImage} alt={`${this.storyTitle} cover`} />
                            </div>
                        )}
                        <div class="player-info">
                            <h2 class="title">{this.storyTitle}</h2>
                            <p class="author">{this.author}</p>
                            <p class="chapter">{this.chapterName}</p>
                        </div>
                    </div>

                    <div class="progress-container">
                        <div class="progress-bar" onClick={this.handleProgressClick}>
                            <ur-linear-progress value={this.currentTime} max={this.duration}></ur-linear-progress>
                            <div
                                class="progress-thumb"
                                style={{
                                    left: `${(this.currentTime / (this.duration || 1)) * 100}%`,
                                    display: this.duration > 0 ? 'block' : 'none',
                                }}
                                onMouseDown={this.handleThumbMouseDown}
                            ></div>
                        </div>
                        <div class="time-display">
                            <span class="current-time">{this.formatTime(this.currentTime)}</span>
                            <span class="duration">{this.formatTime(this.duration)}</span>
                        </div>
                    </div>

                    {this.showControls && (
                        <div class="controls">
                            <div class="main-controls">
                                <ur-button-icon
                                    icon="skip_previous"
                                    variant="standard"
                                    buttonHeight="44px"
                                    buttonWidth="44px"
                                    onClick={this.handleSkipBackward}
                                    aria-label={this.backwardText}
                                ></ur-button-icon>

                                <ur-button-icon
                                    class="play-pause-button"
                                    icon={this.isPlaying ? 'pause' : 'play_arrow'}
                                    variant="filled"
                                    buttonHeight="56px"
                                    buttonWidth="56px"
                                    onClick={this.handlePlayPause}
                                    aria-label={this.isPlaying ? this.pauseText : this.playText}
                                ></ur-button-icon>

                                <ur-button-icon
                                    icon="skip_next"
                                    variant="standard"
                                    buttonHeight="44px"
                                    buttonWidth="44px"
                                    onClick={this.handleSkipForward}
                                    aria-label={this.forwardText}
                                ></ur-button-icon>
                            </div>

                            <div class="secondary-controls">
                                <div class="speed-control">
                                    <ur-tooltip variant="rich" placement="top" trigger="click">
                                        <ur-button-icon slot="" icon="speed" variant="standard" buttonHeight="36px" buttonWidth="36px" aria-label={this.speedText}></ur-button-icon>

                                        <div slot="rich-content" class="speed-options">
                                            {[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map(rate => (
                                                <button
                                                    class={{
                                                        'speed-option': true,
                                                        'active': this.playbackRate === rate,
                                                    }}
                                                    onClick={() => this.handlePlaybackRateChange(rate)}
                                                >
                                                    {rate}x
                                                </button>
                                            ))}
                                        </div>
                                    </ur-tooltip>
                                </div>

                                <div class="volume-control">
                                    <ur-button-icon
                                        icon={this.volume === 0 ? 'volume_off' : this.volume < 0.5 ? 'volume_down' : 'volume_up'}
                                        variant="standard"
                                        buttonHeight="36px"
                                        buttonWidth="36px"
                                        onClick={this.handleVolumeChange}
                                        aria-label={this.volumeText}
                                    ></ur-button-icon>

                                    <div class="volume-slider-container">
                                        <input type="range" min="0" max="1" step="0.01" value={this.volume} class="volume-slider" onInput={this.handleVolumeChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Host>
        );
    }
}
