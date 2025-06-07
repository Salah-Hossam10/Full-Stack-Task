Skip Hire Selector
A React app to browse and select skip hire options with filters for size, road placement, and view modes.

Features
Browse skip hire options by size and availability

Filter skips by size ranges and road placement permission

Toggle between grid and list views for easier browsing

Displays price inclusive of VAT, hire period, and other key info

Highlights skips allowed on the road and those suitable for heavy waste

Responsive and accessible UI using Tailwind CSS and lucide-react icons

Demo

Installation
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/skip-hire-selector.git
cd skip-hire-selector
Install dependencies

bash
Copy
Edit
npm install
# or
yarn install
Run the app locally

bash
Copy
Edit
npm start
# or
yarn start
Open http://localhost:3000 to view it in your browser.

Usage
Select filters to narrow down skip options

Click a skip card or row to select it

Switch between grid and list view using the icons in the header

Technologies Used
React (functional components, hooks)

Tailwind CSS for styling

lucide-react for icons

useMemo for efficient filtering

Folder Structure
bash
Copy
Edit
/src
  /components   # SkipCard, SkipRow, Filters, etc.
  /assets      # Images, icons
  App.js       # Main app component
  index.js     # Entry point
