# Seeta High School Digital Yearbook

A responsive Next.js yearbook starter for a high-school graduating class moving on to university. The visual direction is editorial, warm and premium: deep navy, cream, muted gold and large photography.

## Pages included

- Home
- Our Story
- People directory
- Memories gallery
- Our Journey timeline
- Messages and tributes

The people, memories and milestones are sample content. Replace it before publishing.

## 1. What you need

- A GitHub account
- A Vercel account
- Node.js 20 or newer if you want to run the site locally

## 2. Add your photographs manually

Put the original image files in `public/images/`.

Use simple filenames, for example:
- `student-01.jpg`
- `student-02.jpg`
- `memory-01.jpg`
- `seeta-campus.jpg`

Then edit `lib/yearbook-data.ts` and update the image paths, names, bios, captions and milestones.

**Image quality:** Next.js Image displays responsive versions for the screen, while the original files remain in `public/images/`. For the best result, upload high-quality original photos. Keep file sizes reasonable for the web (JPEG/WebP is usually suitable for photos). Never use a private photo unless the person has agreed to have it included.

### Important: upload method

This starter uses photos committed to GitHub in `public/images/`, so it is ideal for a small yearbook that an editor updates manually. It does **not** yet include an upload button or database. A visitor cannot upload a photo through the live website.

If you want an admin page where you can sign in and upload photos from your phone or computer without editing code, we can add a secure backend such as Supabase Storage and an admin-only upload screen in a later step. That is also the better approach if the gallery becomes large.

## 3. Run locally (optional)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 4. Upload the project to GitHub

1. Download and extract this ZIP.
2. Create a new **empty** GitHub repository, e.g. `seeta-high-school-yearbook`.
3. Upload the project files and folders to the repository. Make sure `package.json`, `app`, `components`, `lib`, and `public` are at the repository root.
4. Commit the files.

If you use Git on your computer, from the extracted project folder you can run:

```bash
git init
git add .
git commit -m "Build Seeta High School yearbook starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/seeta-high-school-yearbook.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and use the repository URL GitHub gives you.

## 5. Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the detected Next.js settings.
4. Select Deploy.
5. Vercel will give you a live URL. Later commits to the connected branch will trigger new deployments.

## 6. Where to edit

- Homepage: `app/page.tsx`
- About/story page: `app/about/page.tsx`
- People directory: `app/people/page.tsx`
- Memories: `app/memories/page.tsx`
- Timeline: `app/journey/page.tsx`
- Messages: `app/messages/page.tsx`
- Shared navigation/footer: `components/site-chrome.tsx`
- Names, bios, image filenames and timeline data: `lib/yearbook-data.ts`
- Design and responsive styling: `app/globals.css`

## Before publishing

- Replace all sample names and descriptions.
- Add only approved photographs and personal details.
- Remember that files in a public GitHub repository and the deployed `public` folder are publicly accessible. Use a private repository if needed, but note that files served by the live website are still public.
- Do not add private contact details, student records or sensitive information.
- This starter has no login, database, or real message-submission system yet.
