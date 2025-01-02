const { ProgramBuilder } = require('brighterscript');

async function main() {
    const builder = new ProgramBuilder();
    
    try {
        // Configure the program
        await builder.run({
            project: './bsconfig.json',
            createPackage: false,
            deploy: false,
            sourceMap: true,
            debug: true
        });

        console.log('Program executed successfully');
    } catch (error) {
        console.error('Error executing program:', error);
        process.exit(1);
    }
}

main();
