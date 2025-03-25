const path = "node_modules/@types/mdx/types.d.ts"

const fs = require('fs');

// Function to replace all occurrences of a string in a file
function replaceAllInFile(filePath, searchValue, replaceValue) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Use replaceAll if searchValue is a string, otherwise use RegExp
        const updatedData = data.replaceAll(searchValue, replaceValue);

        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File updated successfully!');
            }
        });
    });
}

replaceAllInFile(path, ' JSX.', ' React.JSX.');
replaceAllInFile(path, '<JSX.', '<React.JSX.');
