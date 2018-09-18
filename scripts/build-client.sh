mkdir checkout &&  
cd checkout && 
git clone https://github.com/AHIOS/YTReNuxt.git && 
cd YTReNuxt && 
yarn && 
yarn run generate && 
mv dist/ ../../public &&
cd ./../../ &&
rm -rf checkout