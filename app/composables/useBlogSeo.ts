interface BlogPostMeta {
    title: string;
    description?: string;
    image?: string;
    author?: string;
    date?: string;
    tags?: string[];
  }
  
  export function useBlogSeo(meta: BlogPostMeta) {
    const config = useRuntimeConfig();
    const route = useRoute();
  
    const baseUrl = 'https://programmingonmars.io';
    const articleUrl = `${baseUrl}${route.path}`;
    
    useSeoMeta({
      title: meta.title,
      description: meta.description,
      
      // Open Graph
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogImage: meta.image ? `${baseUrl}${meta.image}` : undefined,
      ogUrl: articleUrl,
      ogType: 'article',
      
      // Twitter
      twitterTitle: meta.title,
      twitterDescription: meta.description,
      twitterImage: meta.image ? `${baseUrl}${meta.image}` : undefined,
      twitterCard: 'summary_large_image',
      
      // Article specific
      author: meta.author,
      articlePublishedTime: meta.date,
      articleModifiedTime: meta.date,
      articleTag: meta.tags,
    });
  
    onServerPrefetch(() => {
      useHead({
        link: [
          { rel: 'canonical', href: articleUrl }
        ]
      });
    });
  }

  
  