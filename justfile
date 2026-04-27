# Run the development server for the website
install:
    npm install --prefix ./Lovestuffy.com

run: install
    npm run dev --prefix ./Lovestuffy.com

ci:
    npm ci --prefix ./Lovestuffy.com

build:
    npm run build --prefix ./Lovestuffy.com
