# My GitHub Pages Website

This is a personal website built with Jekyll and hosted on GitHub Pages.

## Local Development

To run this website locally, you'll need to have Ruby installed on your system. Then follow these steps:

1. Install the required gems:
   ```bash
   bundle install
   ```

2. Start the local development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Visit `http://localhost:4000` in your browser to see the website.

## Project Structure

- `_config.yml`: Main configuration file
- `_layouts/`: Contains the HTML templates
- `assets/`: Contains CSS, images, and other static files
- `_posts/`: Blog posts (create this directory when you want to add blog posts)
- `index.md`: The homepage of your website

## Adding New Content

- To add a new blog post, create a new markdown file in the `_posts` directory with the format: `YYYY-MM-DD-title.md`
- To add a new page, create a new markdown file in the root directory with the appropriate front matter

## Deployment

This website is automatically deployed to GitHub Pages when you push changes to the main branch. No additional steps are required for deployment. 