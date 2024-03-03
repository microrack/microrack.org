
# Project README

This is a MICRORACK website project, based on [Next.js](https://nextjs.org/) with React and CSS Modules.

## Getting Started

### Environment Setup

1. **Install Node.js**: Ensure Node.js is installed on your system. This project requires Node.js 12.x or later.
2. **Clone the Repository**: Clone this project to your local machine.
   ```bash
   git clone <repository-url>
   ```
3. **Install Dependencies**: Navigate to the project directory and install its dependencies.
   ```bash
   npm install
   ```

### Run and Preview the Project

- **Development Server**:
  Start the development server to preview the project locally.
  ```bash
  npm run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) in your browser to see the project live. The development server supports hot reloading; changes you make in the code will automatically refresh in the browser.

- **Editing**: To modify the project, edit the files within the `pages` directory. For example, `pages/index.js` is a good starting point.

### Deployment

- **Preparation**: Ensure all changes are committed, including any version bumps or final adjustments needed for deployment.
- **Deploy Command**: Run the deployment command to build your project and push changes for deployment.
  ```bash
  npm run deploy
  ```
  This command handles the build process and pushes the build artifacts to the appropriate branch, triggering the configured GitHub Actions workflow for deployment.

## Learn More

For a deeper dive into Next.js features and API, the following resources are highly recommended:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guides and the API reference.
- [Learn Next.js](https://nextjs.org/learn) - An interactive tutorial for beginners and advanced users alike.

## Contributing

Contributions are always welcome! Please refer to the project's issue tracker or discussion board for areas where you can help. Ensure to follow the project's contribution guidelines.

## Feedback and Support

For feedback or support, please create an issue in the GitHub repository. Your input helps make this project better for everyone.
