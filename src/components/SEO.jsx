import { useEffect } from 'react';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  schema
}) {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tags
    const updateMeta = (name, property, content) => {
      if (content === undefined || content === null) return;
      let el = name 
        ? document.querySelector(`meta[name="${name}"]`) 
        : document.querySelector(`meta[property="${property}"]`);
      
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        if (name) el.setAttribute('name', name);
        if (property) el.setAttribute('property', property);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    // 2. Standard Meta Tags
    updateMeta('description', null, description);
    updateMeta('keywords', null, keywords);
    updateMeta('author', null, 'H2F Events');

    // 3. Open Graph Tags
    updateMeta(null, 'og:title', ogTitle || title);
    updateMeta(null, 'og:description', ogDescription || description);
    updateMeta(null, 'og:image', ogImage || 'https://h2f-events.pages.dev/media/logonew.png');
    updateMeta(null, 'og:url', ogUrl || window.location.href);
    updateMeta(null, 'og:type', ogType);
    updateMeta(null, 'og:locale', 'en_LK');

    // 4. Twitter Cards
    updateMeta('twitter:card', null, 'summary_large_image');
    updateMeta('twitter:title', null, ogTitle || title);
    updateMeta('twitter:description', null, ogDescription || description);
    updateMeta('twitter:image', null, ogImage || 'https://h2f-events.pages.dev/media/logonew.png');

    // 5. Canonical Link
    const currentCanonicalUrl = canonical || window.location.href.split('#')[0];
    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', currentCanonicalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', currentCanonicalUrl);
      document.head.appendChild(link);
    }

    // 6. JSON-LD Schema
    const scriptId = 'jsonld-seo-script';
    let scriptEl = document.getElementById(scriptId);
    
    if (schema) {
      if (scriptEl) {
        scriptEl.textContent = JSON.stringify(schema);
      } else {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        scriptEl.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptEl);
      }
    } else {
      // If no schema passed, clean up the old one
      if (scriptEl) {
        scriptEl.remove();
      }
    }

    // Cleanup function on component unmount
    return () => {
      // We don't strictly need to clear meta tags immediately, but we can clean up schema
      const activeScript = document.getElementById(scriptId);
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, ogType, schema]);

  return null;
}
