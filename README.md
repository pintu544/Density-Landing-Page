# Density Landing Page - Project Documentation

## Project Overview

This project involves creating a landing page for Density using the provided Figma design. The tech stack includes the Gatsby framework for building the website, a headless CMS for content management, and styled-components for styling.

### Figma Design

[Figma Design Link](https://www.figma.com/file/5uRfCmN7iWiHM0syqMSVYb/Density-Landing-Page?type=design&node-id=0-1&mode=design&t=fcf14BoSDovuZu7l-0)

## Tech Stack

1. **Gatsby Framework**: Gatsby is chosen for its efficiency in building fast and optimized websites using React.

2. **Headless CMS**: ContentStack is selected as the headless CMS to manage content effectively.

3. **Styling**: Styled components are used to enhance modularity and maintainability in styling.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the main source code for the Gatsby project.
  - `components/`: Includes reusable React components.
  - `pages/`: Contains individual pages of the website.
  - `styles/`: Holds styled-components for styling.
  - `templates/`: Includes Gatsby templates for dynamic pages.
  - `utils/`: Consists of utility functions or helper files.

## Setup and Installation
Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>
1. Clone the repository:

```bash
git clone [<repository-url>](https://github.com/pintu544/Density-Landing-Page)
cd Density-Landing-Page
```

2. Install dependencies:

```bash
npm install
```

  
3. Set up the headless CMS (ContentStack):
   - Follow the documentation of ContentStack to set up and configure.

4. Configure Gatsby to connect with the headless CMS:
   - Update the necessary configurations in `gatsby-config.js` to connect with ContentStack.

5. Start the development server:

```bash
gatsby develop
```

Visit `http://localhost:8000` to preview the website.

## Deployment

The project is deployed using [Vercel](https://vercel.com/) for live demonstration. The deployment link is [provided here](https://density-landing-page-peach.vercel.app/).

## Challenges and Solutions

### Challenge 1: Content Modeling

Understanding and modelling content in ContentStack was a challenge, as it required aligning the CMS structure with the Figma design.

**Solution**: Collaborated with the content team to define a clear content model. Regular communication and feedback helped in refining the model for better alignment with the design.

### Challenge 2: Netlify CMS Integration

Integrating Netlify CMS for content editing posed a challenge due to the need for seamless integration with Gatsby.

**Solution**: Followed the Netlify CMS documentation carefully and tested different configurations. Ensured that the CMS integrates smoothly with Gatsby for a seamless content editing experience.

### Challenge 3: Performance Optimization

Ensuring the website's performance is optimal, especially with media-heavy content, requires careful consideration.

**Solution**: Implemented lazy loading for images, optimized image sizes, and leveraged Gatsby's built-in performance optimization features. Regularly monitored performance metrics and made adjustments as needed.



  
