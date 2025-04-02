// Handle code execution for examples
document.querySelectorAll('.run-code').forEach(button => {
    button.addEventListener('click', function() {
        const codeBlock = this.previousElementSibling.querySelector('code');
        const outputDiv = this.nextElementSibling;
        
        // Create a safe execution environment
        const originalConsoleLog = console.log;
        const originalConsoleError = console.error;
        let output = '';
        
        // Override console methods to capture output
        console.log = function(...args) {
            output += args.join(' ') + '\n';
            originalConsoleLog.apply(console, args);
        };
        
        console.error = function(...args) {
            output += 'Error: ' + args.join(' ') + '\n';
            originalConsoleError.apply(console, args);
        };
        
        try {
            // Execute the code
            eval(codeBlock.textContent);
            
            // Display the output
            outputDiv.textContent = output || 'Code executed successfully!';
        } catch (error) {
            outputDiv.textContent = `Error: ${error.message}`;
        } finally {
            // Restore original console methods
            console.log = originalConsoleLog;
            console.error = originalConsoleError;
        }
    });
});

// Handle exercise submissions
document.querySelectorAll('.submit-code').forEach(button => {
    button.addEventListener('click', function() {
        const textarea = this.previousElementSibling;
        const outputDiv = this.nextElementSibling;
        const code = textarea.value;
        
        try {
            // Create a safe execution environment
            const originalConsoleLog = console.log;
            const originalConsoleError = console.error;
            let output = '';
            
            console.log = function(...args) {
                output += args.join(' ') + '\n';
                originalConsoleLog.apply(console, args);
            };
            
            console.error = function(...args) {
                output += 'Error: ' + args.join(' ') + '\n';
                originalConsoleError.apply(console, args);
            };
            
            // Execute the code
            eval(code);
            
            // Display the output
            outputDiv.textContent = output || 'Code executed successfully!';
        } catch (error) {
            outputDiv.textContent = `Error: ${error.message}`;
        } finally {
            console.log = originalConsoleLog;
            console.error = originalConsoleError;
        }
    });
});

// Handle navigation highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add syntax highlighting to code blocks
Prism.highlightAll();

// Mock API for async examples
const mockApi = {
    fetchData: () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Data fetched successfully!' });
        }, 1000);
    })
};

// Add mock fetch for async examples
if (typeof fetch === 'undefined') {
    window.fetch = function(url) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    json: () => Promise.resolve({ data: 'Mock API response' })
                });
            }, 1000);
        });
    };
}

// Add example solutions for exercises
const exerciseSolutions = {
    asyncDataFetching: `async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
}`,
    
    bankingSystem: `class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
        return this.balance;
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        this.balance += this.balance * this.interestRate;
        return this.balance;
    }
}`
}; 