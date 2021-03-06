mkdir checkout &&  
cd checkout && 
git clone https://github.com/AHIOS/YTReNuxt.git && 
cd YTReNuxt && 
echo commit number && git rev-list HEAD | wc -l &&
echo commit message && git log -1 --pretty=%B | cat &&
yarn && 
yarn run generate && 
mv dist/ ../../public &&
cd ./../../ &&
rm -rf checkout