pwd &&
cd ../../nuxt/YTReNuxt &&
yarn && 
yarn run generate && 
pwd && ls &&
rm -rf ../../feathers/YTReBE/public/dist &&
mv dist/ ../../feathers/YTReBE/public
# cd ./../../ &&
# rm -rf checkout