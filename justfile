# Run the development server for the website
install:
    npm install --prefix ./Lovestuffy.com

run: install
    npm run dev --prefix ./Lovestuffy.com

ci:
    npm ci --prefix ./Lovestuffy.com

build: install
    npm run build --prefix ./Lovestuffy.com

build-ci: ci
    npm run build --prefix ./Lovestuffy.com
