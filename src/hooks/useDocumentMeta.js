import { useEffect } from "react";

function upsertMeta(selector, attributes) {
  const existing = document.head.querySelector(selector);
  const element = existing ?? document.createElement("meta");

  Object.entries(attributes).forEach(([attributeName, attributeValue]) => {
    if (attributeValue !== undefined && attributeValue !== null) {
      element.setAttribute(attributeName, attributeValue);
    }
  });

  if (!existing) {
    document.head.appendChild(element);
  }

  return element;
}

function upsertLink(selector, attributes) {
  const existing = document.head.querySelector(selector);
  const element = existing ?? document.createElement("link");

  Object.entries(attributes).forEach(([attributeName, attributeValue]) => {
    if (attributeValue !== undefined && attributeValue !== null) {
      element.setAttribute(attributeName, attributeValue);
    }
  });

  if (!existing) {
    document.head.appendChild(element);
  }

  return element;
}

export function useDocumentMeta(metadata) {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (metadata.title) {
      document.title = metadata.title;
    }

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: metadata.description
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: metadata.keywords
    });
    upsertMeta('meta[name="author"]', {
      name: "author",
      content: metadata.author
    });
    upsertMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: metadata.themeColor
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: metadata.title
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: metadata.description
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website"
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: metadata.url
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: metadata.image
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image"
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: metadata.title
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: metadata.description
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: metadata.image
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: metadata.url
    });
  }, [metadata]);
}
