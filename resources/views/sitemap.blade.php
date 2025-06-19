<?php echo '<?xml version="1.0" encoding="UTF-8"?>';  $date = date("Y-m-d");?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
        <loc>https://rajanrathod.in</loc>
        <lastmod>{{ $date }}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://rajanrathod.in/works</loc>
        <lastmod>{{ $date }}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://rajanrathod.in/blogs</loc>
        <lastmod>{{ $date }}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>

    @foreach ($blogs as $blog)
        <url>
            <loc>https://rajanrathod.in/blog/{{ $blog->blog_url }}</loc>
            <lastmod>{{ $date }}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    @endforeach

</urlset>
