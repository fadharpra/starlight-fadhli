# (Fadhli Blog)[https://blog.fadharpra.id]

Personal technical blog powered by **Astro + Starlight**, focused on infrastructure, DevOps, cloud, automation, and real-world engineering notes.

Live site: https://blog.fadharpra.id

---

## 📌 About This Blog

This blog is built using the **Starlight Blog Template** by HiDeoo:

👉 https://github.com/HiDeoo/starlight-blog

The template is extended and customized to support:
- Technical long-form articles
- MDX-based content
- Code-heavy posts (Terraform, Ansible, Linux, Docker, etc.)
- Bilingual content (ID / EN)

This is primarily a **personal blog**, but contributions are welcome.

---

## ✍️ Contributing

I’m open to contributions if you want to:
- Share technical articles
- Write tutorials, labs, or case studies
- Contribute knowledge related to DevOps, Infra, Cloud, Linux, Automation, or related topics

### Contribution Flow (Recommended)

The contribution process uses a standard **GitHub Pull Request (PR)** flow:

1. Fork this repository
2. Create a new branch from `prod`
3. Add your article under:
   ```
   src/content/blog/
   ```
4. Write your post in **MDX** format
5. Submit a **Pull Request**
6. I’ll review it before merging

> All submissions are subject to review.  
> I may request edits or adjustments before publishing.

---

## 📝 Writing Guidelines

Some basic rules to keep things consistent:

- Use **Markdown / MDX**
- Include frontmatter metadata:
  ```yaml
  ---
  title: "Your Article Title"
  author: "your-name"
  date: YYYY-MM-DD
  tags: ["DevOps", "Linux", "Cloud"]
  ---
  ```
- Original content only (no copy-paste from paid courses or copyrighted materials)
- Clear explanations are preferred over buzzwords
- Casual tone is okay, clarity is mandatory

---

## 🌐 Language

⚠️ **Important**

This blog enforces **mandatory bilingual content (EN / ID)**.

Due to how **Starlight language routing and listing** works, **every article must exist in both languages**. If one language is missing, switching languages will cause a broken page or 404 because the article is already listed.

### Required Languages

Each article **must have two versions**:
- **English (EN)**
- **Bahasa Indonesia (ID)**

Example structure:
```
src/content/blog/en/your-article.mdx
src/content/blog/id/your-article.mdx
```

### Translation Rules

- Contributors may:
  - Write the article in **one language first** (their native language)
  - Provide the second language as a translation

- Translation methods:
  - **Manual translation** is preferred
  - **AI-assisted translation is allowed**, but:
    - Technical terms must be reviewed carefully
    - The contributor is responsible for correctness

- If the translation quality is insufficient:
  - The PR may be requested for revision, or
  - The maintainer may adjust the translation before merging

### Why This Is Mandatory

- Starlight generates article listings per language
- Missing language files will break navigation when switching languages
- Enforcing bilingual content guarantees:
  - Consistent UX
  - No broken links
  - Clean language switching

---

## 🚫 What This Blog Is NOT

- Marketing content
- SEO spam
- AI-generated low-effort articles
- Plagiarized content

---

## 📬 Questions or Ideas?

If you’re unsure whether your idea fits:
- Open a **GitHub Issue**, or
- Mention it directly in your Pull Request

---

## 📄 License and Credits

Content and code follow their respective licenses.  
Contributed articles remain credited to their original authors.
- Template: https://github.com/HiDeoo/starlight-blog
- Built with Astro & Starlight

---



