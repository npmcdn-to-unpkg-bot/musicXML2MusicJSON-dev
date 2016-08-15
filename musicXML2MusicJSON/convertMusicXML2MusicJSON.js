//node convertMusicXML2MusicJSON.js  '/corpus/bach.xml'

var parseMusicXML = require('./parser')
var argv = require('minimist')(process.argv.slice(2));

//
//if (argv["f"]) {
//    console.log('Converting' + argv["f"] + ' to musicJSON...')
//    parseMusicXML.parseRawMusicXML(argv["f"]);
//}
//else {
//    console.log('You need to pass a musicXML file using "-f pathToYourFile.xml". \nIf you don\'t have a musicXML file handy there are some samples in the ./corpus folder');
//}
//

 //parseMusicXML.parseRawMusicXML("/corpus/musicXML/misc/moz1.xml")
 //parseMusicXML.parseRawMusicXML("/corpus/musicXML/misc/bach.xml")
 parseMusicXML.parseRawMusicXML("/corpus/musicXML/KeithJarrett/somedayMyPrinceWillCome.xml")
 //parseMusicXML.parseRawMusicXML("/corpus/musicXML/misc/mahl1_1.xml")
