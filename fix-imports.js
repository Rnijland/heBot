const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const componentsDir = path.join(__dirname, 'components', 'ui');

async function fixImports() {
  try {
    const files = fs.readdirSync(componentsDir);
    
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const filePath = path.join(componentsDir, file);
        let content = await readFile(filePath, 'utf8');
        
        // Fix @radix-ui imports with version numbers
        content = content.replace(/@radix-ui\/react-[a-zA-Z-]+@\d+\.\d+\.\d+/g, (match) => {
          return match.split('@').slice(0, -1).join('@');
        });
        
        // Fix lucide-react imports with version numbers
        content = content.replace(/lucide-react@\d+\.\d+\.\d+/g, 'lucide-react');
        
        // Fix class-variance-authority imports with version numbers
        content = content.replace(/class-variance-authority@\d+\.\d+\.\d+/g, 'class-variance-authority');
        
        await writeFile(filePath, content);
        console.log(`Fixed imports in ${file}`);
      }
    }
    
    console.log('All imports fixed successfully!');
  } catch (error) {
    console.error('Error fixing imports:', error);
  }
}

fixImports();
