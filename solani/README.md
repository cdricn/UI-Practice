# Recreating Solani Portfolio
Original website: [SOLANI Portfolio](https://solani-illustration.xyz/)
Created by: [Keita Yamada](https://p5aholic.me/projects/)
Art assets by: [Eka39](https://www.pixiv.net/users/29608188)

## Website Description:
A portfolio website showcasing the artworks of a japanese illustrator.

## Write-up
The recreation does not include filtering and artwork page linking. I felt those features did not meet the scope of the project, which is about recreating the UI. The info page was also excluded because its UI was similar to the artworks page, so making it was not necessary.

This website was more complicated than I thought it would be. The hardest part of recreating it was the positioning of the UI elements. For example, in the landing page, the short text description is aligned to the first letter of the final word of the header, which was text-aligned right. Another one is the menu button; it was always aligned with the logo, the page headers, or the artwork section in the landing page.

I tried using what I know to recreate these: flex for layout and percentages and clamps to align and get the positioning perfectly, however, I found myself having to do a lot of hacky solutions to hide the imperfections of the layout while keeping it responsive. In the end, though I think I did an okay job with making it responsive, the overall layout of the website, which was in my opinion a huge factor of what made the website look elegant, started to break down during resize.

Doing this with react was kinda hard. Perhaps I'll try Alpine.js, the framework used for the website.

## Notes:
### Landing
- The header and description should be smaller in width compared to the image carousel.
- The description of the landing page must be aligned with the last word of the header.
- Images in the carousel has a border of 1px solid white.
- The left and right edges of the image carousel has a white border.
- The menu button must be aligned with the left edge of the image carousel.

### Menu
- Menu options should be indented so they start at around 90% of the width of the logo.
- Menu button should be aligned with the left of the logo
- Theme selection should be aligned with the bottom of the menu button