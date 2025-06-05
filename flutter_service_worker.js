'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8258faaa7ab4ff437dc7ac7f8251605a",
"version.json": "ee72286e239ced3cc40c2685d2b4d866",
"index.html": "f8cbfe4eba1c8d90b05e07dbff790b2b",
"/": "f8cbfe4eba1c8d90b05e07dbff790b2b",
"main.dart.js": "6da642d719fb204105c3dfb121d7f164",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9e7908a780b1d39909fac4b6d848fa60",
".git/config": "7c1b0b651dac812894fe207a49ae7920",
".git/objects/61/193a3ec93ec96b8cab783335cb54e095ab5985": "3cc92628e0fc39adc405f71b9c52328e",
".git/objects/61/49262a3811abc4243f096ef9c96f4274e3a5ff": "3d527f6a25bbd083080a64e4b6b9695c",
".git/objects/0d/58e39bf2236abaea972e20db7b6e248a98e983": "2937f0c8520a472f898e40045ecbe3f1",
".git/objects/0c/27995aed4c5a40f48b14fcfc9698cca6e930a9": "8d669afdd992902a65d3e27baca4ddf3",
".git/objects/66/65ed53cbd9c5e37fa2d3a3f82e8d0903e75838": "6eba80c4c90718a60dcef47b18662023",
".git/objects/3e/3dfacf6f6b82d51b7dbc5a80dc63b9b68f45f6": "ceb698d3ede74bfcfb05d201a9b12196",
".git/objects/50/1ecda0358177904e8f061df19ee49117edad2f": "84bf4f9116c99a55555cb60e31ddce8d",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/56d5918761e37b2467920a74453d4dbb75d913": "1ab53f56daff28f5b99ecd702a315db3",
".git/objects/57/56ec380261927cfaae4d3e8bd6346295397d59": "72a4f99848fb982392ce01dd31be487f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/6f/befb2a7751a9911652b20313ad538b2f563ce3": "38a43f2cf7a86655ef0a444eaefbc111",
".git/objects/03/c01f7572aa52805f5e966cc5fc92902155e234": "c0721730e278439694b1ad2589505317",
".git/objects/9b/b7cba6ac3674a939860cf227c3e4ae839ff541": "2d36145afa4f8c13f198ec854c0c90bd",
".git/objects/9e/a21676adc58c47907aad57312bd4ab0416df8c": "86fe4404724f50332f674b160277a025",
".git/objects/04/b088b2589976e496c9ed86da2676ae57951811": "53a81a882b4497ec7c8da40458d71b38",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/fa23bfb1199c589cb110b7c57fbf63e1f3e7df": "900129b9e3bee0e1cebeb942e6b2b42d",
".git/objects/51/b5302a959214c6ff7bc9114ee9c1caa8a90218": "badd104ab8b7a04372ce56fe40ea459d",
".git/objects/58/a66c78c2afabd0fdca2f1026bfb0ab17cbd7f6": "296b436f831cdcce204453ef361f00e0",
".git/objects/0b/6272d6aacf3a2119d8db9ff8001a8fed02e4cf": "4fc0c59df3f70b8af944e0e54a5fcfa9",
".git/objects/0b/575bff12e2985556345f7f075d34ccd38b93d3": "a8c42d5190d296f4a14caaaec4ff5df2",
".git/objects/0e/597ae05be40cea7de3b8d001e1b09584c35e3d": "e8f92751ec8e0443571df407cc3a00c6",
".git/objects/0e/b94b8dff745d31856876bfa3448ebc7aac02c3": "f31545eb8398d5b5487c0b8e1119b332",
".git/objects/60/81b587d6090bd9250c39dcffa8bebc0fe9533a": "f2f6a7a6c8b6d224e2614728a050984b",
".git/objects/34/571e03922f5daf7544f65569d4c6e00edb945f": "4a9b87a35d6724b2bd6395e186ebfe8e",
".git/objects/5a/6771f0bcaf2ae7560bc13c9a902deb90c1a6c4": "3cff69ca3bfde913a1de0b8b2f04ec5e",
".git/objects/5f/30b84a074a49feff16214fff76aa127c7ea7ab": "105bc7ff9a201d0b568ffb1f46b296c9",
".git/objects/05/f5c7499f2530431325ee5f3a2d9c9a11251e29": "b875491fea49b41d899527f354bafeda",
".git/objects/05/24f307c2487d7b96693d2be048e682b6d05b82": "e7ccd93c5b5ffc26916fc523e7127184",
".git/objects/9d/52b9d415ecfe24f09210a71bf16ec547c8b51a": "840456849d23b53f370faec9ba630c32",
".git/objects/9c/227c0a12f0c60cf91b24f76777df633f1a5de8": "64bef4acdcb377a7bd0d2efea32bba5b",
".git/objects/02/365dfd91f0f872bf5f398d549c586ad36207fd": "379eb0c2317036877109363a4f8247e4",
".git/objects/a4/c4fc1f4c33a6f75c24842b525d6f4960d7a895": "137620bd767f84660f0bfbdab9be3b2a",
".git/objects/a4/976587d14f35b5bf7ae893379c5dab2b9da2f1": "7befc20b7f558c3ba35a746082cbeb1b",
".git/objects/a3/064fd8b9b3a37b2cc57ae785649ebb9edbd463": "8e84a2df0381fa025909258d1cce53c9",
".git/objects/b2/e3a62ce73d1cae876e6021c784e6d3bf4e23af": "2f2f1b1bc27ef36c68add0ea1f5cf259",
".git/objects/b2/1076d18c2dc69425353da0bf20f64958163e99": "92e36c31fe89acc56a02c75f95fbda0c",
".git/objects/ac/c8d5dde1f21dcc5bb414c7b63f542502b62ede": "259328794e3a1378a40e11418f8986be",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/7a01292d4601b63b92c69657c653bf20d3eb9b": "a008223d8d00970cb2dad1849bfd8572",
".git/objects/d7/697b8eceb3de573d6b99d7505f46e38999c6e5": "ab2f1e5523e6c2fde54ef28176029a1a",
".git/objects/d0/3ee146b074351a473d98091ec9a71313f3cdf7": "7fd4fe1b64e717a434380ecc6dbf1f07",
".git/objects/d0/3d834d8642adb5786989e18ebe5d84a975e3d8": "6ef87a18e1fb25aed105aa528654a2b0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/e49a29f0953ebaf720a5e37b7f6622d9021c1a": "c95b6e8f4f69e5efb3b3d2d471d02c07",
".git/objects/b3/5c6d1dd3c5b5b229740fb3a58f9029ad3a24d4": "6141dba2945dc6bfe63ba561ca818789",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/b4/89ca20fa610ac7a8b201fdc58fce2b9848544e": "7cd1ac3f9df44b9267cba2c100ff5567",
".git/objects/b4/172d2b16666380d21d544ceba3f5e6d13d54e9": "c70540249250253ef07495034d1d3beb",
".git/objects/a2/4b58711b407ecb0e8e24b996a9427386403f80": "feca057c0baf0ed918efaa08490ae98c",
".git/objects/bd/f725af06525fef3b06b393047e81be9f7579ca": "54dd61945d491026737e0c396451132e",
".git/objects/d6/b04bf160df01199488954b5a64d6306f1c7ebd": "8399e084cd14008323cd74fc45d35d7e",
".git/objects/d6/89e8308d0843002bbff7783cf2c4acb1845561": "45dd71284d2a800f59dae5923681304f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/b964b373b1147a98b4b3a7e81aad06fefddb38": "cc86f6ad649227c94181090160dd96fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0f872dd036b844ef27181f687384c6d296171f": "988c2587a2b5f1a288e5b768cbf0d240",
".git/objects/eb/f8d7b2e4a1f665cf19fd726e0d48f44d8d01b9": "59c5ff84e9d6c80f2eef5632007160f0",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/ee/112fa96426c0fc43ccd6faf534e1b2a09e7db3": "ec1e0c019ba5dceefc5c4327cd4379e0",
".git/objects/fc/b0cb604ceb4fe8d6f79319cd40aa868e9b4b09": "c025240831b3b3265b086f452cff6c94",
".git/objects/fc/d7a399c00485993cc2a23d205447cbfb845bdd": "6db0bca74077db2a30b7e11fd530e4ff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bd38c72c04b35d2fab11ebebc7075c428237ee": "940c101a6c51ba57f5a6713fb558ecd2",
".git/objects/f5/62b39097d0a41d80a96a2c48735d0d83090ec7": "5f139f3c68a9aee89173f8ca1193043b",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/4c82e171ca3f1791c7346fbc0c73f1d5b46bb0": "5ea69aebcc101e7e89c6937a6a5fe2b8",
".git/objects/e3/3c30a1af1fa61f155abcaa9acab13514965fb6": "4f36da391bab55b9a6589ebe867fa5c7",
".git/objects/cf/548e61fda68bba03097854c26b9fd3aacdc190": "443a3f126c08dc9d557a84fa5c57f6de",
".git/objects/ca/786a019b07c2dc7e0ae9a15a563eaa479862c3": "c33a27769dcd73275633669e99852108",
".git/objects/e4/0ccfbfdd49da4e98910b09520be7c1efa61a48": "e678ebb883e0d34bf8470c0ef1fa0737",
".git/objects/fe/9ec87aa9c2e630584a68f1fe8694c4be35cf4e": "d1f408a370305398ddb3661219812995",
".git/objects/fb/320f5b9bc35676fb9e22983f23f1e027387af8": "48b85599ee7bbae4f29a80e88d6e6d33",
".git/objects/ed/4d61654752384c2e174ed323c5c85bd096185b": "227cd6316a5bb345654fcc9888cfd3d7",
".git/objects/ed/0544013100c5f79137540418d91bf13b6edd94": "7a2ab5e78976b7ff8818953ee2c9a561",
".git/objects/c1/6b47e7d3dcdec99d11cf34056bdf11c9e35696": "be68cb36008d8d012d67b7a68de6dfb9",
".git/objects/c6/6fa2bfddbf6d3949171c563cacf5e3b8fa3155": "81aba7e521ca8fecda44a13900be7233",
".git/objects/27/20790c01944228490b06e7d89f1611f1b329cb": "bc6f63af22b28e1553cecbe11ac234b9",
".git/objects/27/2b00751a3d37ee856c941a7497f1c47b5e96bc": "ec1b560d3259de8b2a48a0f723606a28",
".git/objects/7d/010eeca60f04cad52de1f875d2fc1f6a70cd64": "e778c87a778448f9e140e0a3ca919455",
".git/objects/7c/4899da9f5ca600c4c71dbfb91e0a0d9f0b96cf": "5fc96a5516a8afff7e54d20998423b48",
".git/objects/89/c1f79862181397d8b0ffc53ff3fd58cd1c5b57": "2760333028739774b35b177903597b99",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/3f0150058127e99d80c04d3e5bba8ea10fd8b3": "9834e2f1de52fee03337a5a67a0e464a",
".git/objects/80/9eb99fe7f0067a0c9aba5e5955acebc842c639": "0fb391a463e26fa04ff47897d212e183",
".git/objects/74/34f59f344dbc4689c38e2bce175787d2349a8b": "b2f893610d64bee25c541f9190d40e2b",
".git/objects/1a/a674c742637a96c4a25ef8607df801c8b443d4": "3b7cdf9c58226d701f4349aaf986601f",
".git/objects/28/66a570b3969e0d1208631bc3aa33c32f5523e1": "41fab82006d6688efe208934a3c6c7c3",
".git/objects/8a/b547bb4c2bae7f42d4f4f82e4636676bed3331": "d5ebfbdb5db381174118eb69e4d12cf0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4410e38412ba512d2bdfc5bf5ec77789cf3890": "81d910c64bf338096f81385e373a60f9",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/19/22f45dd0b4f7f32416c4b658dc8ee60ed5d139": "b22c186107368ec5a4bb7289abc96a64",
".git/objects/19/fa0dc2d80c4d4f8f980aa803f8810b9b549209": "c4ce66e6e69dc7ad287f145fff70b49e",
".git/objects/4d/85b4d4d50188e6b714713cb2c7e215c59bddd5": "eb9f9282f205efc0250b166046181aec",
".git/objects/4d/463c249f08c24909759157ed6dedbac1009123": "11f7ff16d49625ac5622ac6ff6a2ce5f",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/81/2e1f52359588e4d252a2b2f0efd5fd0e99c979": "301e7ba26415f629c227638d78ec8413",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/a7e146852145c7410e2282f1542d3d9975ec3d": "a87bda20964f92e9156c3225ee6b96bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f712d0b0c8868ac9b9bfca199a9a7b1b547fcb": "4531706195b56ac4a101df749f12490b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/58c7695e97f59c06af2a68dca77c2fd216a3cd": "486ce5ef04391920775a7ab8ad11c04b",
".git/objects/07/ed57ffbf7c7ae271653f02884423b29f9e6b0e": "6432798e68c6af0f131e814a0ab8114f",
".git/objects/38/67d502e999a1145ee08d0a0803c9269e376e0a": "715778a15ab8ae75ccdcc7e2e74bca6d",
".git/objects/38/e2d4c37a0e5943245685615f9bfe502c2664ce": "e3ebc2409428a336389d927ca2ce22ae",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/dbcd39417b0f4fbfa3acc805c2d79c3977e7c0": "d9e5d8a26ccdd41181105a513d05aa52",
".git/objects/09/134c6a67d1dc1f51d4fc7d299b1863597bd537": "38b087316a8f689819eda2d9d2497896",
".git/objects/31/6eb57a7d03bcff5906a9bfb3fe539f5c9a5802": "4e77478e3e54999118fac1c0e65315a6",
".git/objects/31/9d8e806c8e99cab88b554723b2fc701faaa6ee": "67e5f3c3b513bf68d7f9269de7595e96",
".git/objects/91/a2582fdf89692bc3dd8e99b49b3e6c4729fc5c": "4e2b05e3eab64e326603afa50230aa4d",
".git/objects/91/ff9ee426e03ea81d09edf19b53f6f0ac06a67f": "c6182af5a1634459997b04cfe2081ebe",
".git/objects/62/4025ce7c7e57fd577307b0e273c1e7795f3e1e": "edfa194f1a0401721d349a23248579b7",
".git/objects/3a/fb87c3cbac7dccb678b9a53849809248b0c92c": "70ad4bec859259ff3d44379f299d9cc1",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/4f126b99c590da8549c587da2d9206a520ca8b": "5e8e3fea7072ab6952034af5b90ba0c0",
".git/objects/54/a6a4fe2c2734bf4047e0a7a9751a8bc07073ab": "d41f8bb5f8f85acc2f948c92f871647f",
".git/objects/98/a2f646f4de97044f9007f5e742870e38d67e96": "041bb23d404bfd344380693e602fab26",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/381fc2f7e56172d3af9dadefb8e872fb2475ad": "8b86d1fbb9bf3ad49430d8693a6f50d3",
".git/objects/53/376ba5d01338ac21fdb7e7cd7d293f77537a52": "5a7c332df89f1e9d2daa5aff6ff9bafc",
".git/objects/53/cd1faf6e5562c4deb75221d625d595d0bcd8fb": "53825d649f10447735a5402ad622bb62",
".git/objects/5b/321f43a21d662f8a464e6305a78f04a505a14d": "01c88d0fbfba399f24bee53ef02b75bb",
".git/objects/37/4f97e5a30977cba7d0890673a87fd593936fcc": "fd727f6c51bb6aacc0b78b18323ab03d",
".git/objects/37/e22840dc19f122fe2310479512007b01b0f49f": "f87237603922f27326564519f797e606",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/cd633542b9723c371661a34a2466a03562b4b7": "f830f80f09a64b81098f51d32f6f8410",
".git/objects/01/ce91fe7258e162db3da66e0dd336797811d5b2": "a8d3383eb07e42baebdbd9f04b43a07b",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/02d6bcd0f17b15822baab709737dba35cf1e84": "6082a219158b21e260b01826ffbf8575",
".git/objects/99/eca2788be34389e6e981270f610a73bc7238e2": "a6a8fc6ee0da12388e93b4e94f5e32d9",
".git/objects/97/e244e716f3f3eaf07c859bcfa4b9da159a453f": "81ad74cfcd7d5d6e099ac233db658401",
".git/objects/0f/1b32dc55c0748aaa26c5a0a2048bb711cddc9b": "70ac546f574df976354e7fdea8c04095",
".git/objects/0a/01766f2fbe102d310180f8e362bc41769d7682": "8d4faf3131c7dab0e1300692530088e3",
".git/objects/0a/553ef25e4cf2ddc28ef63daf0c3053d23d4304": "ba37491b7e27d918a3fe7149380b27b0",
".git/objects/0a/27c0e1ae6381d3389cfca4aba51e51e07e523d": "3fbc9ae723245652b53384506537b723",
".git/objects/64/b606dff706d175e6d7232b8797827d09a5a3c5": "68188d7c4e666d21312d6d7cca627e12",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/0a9538c52dc4d9d0e3e4edff4516448114a897": "b0c5caff9d39009ef4be0607b1fa211a",
".git/objects/d3/62ecbb835c31faa9117ea0a559e6b6df58c418": "135cec74557ca35d2a61d2c6a4ec86a1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/26e46c393d32bcdc5355f9e58d70cab041dd60": "16cd61107369e8fa9d298f344f12fa73",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/b0e4b0d9d132c46bc3fae97ab2d1c526326bc5": "7bf6f900c4d5080fa6335509006d8f33",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/a68f04758c2a77e0ea01e2b2ad758096747e86": "2b0a317ac6daa9276e2194b11db29519",
".git/objects/dd/af2ac47387e0203cd318e26e13e38f0eb17aa5": "042778147ee4c346e43dae24f45ebfb6",
".git/objects/dd/f3f9600e21ace3889cabccfb1197f3af7777df": "9698790ded53aee1220d8531580d263d",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d2/3c1c995355dc70504db1b7148382332edd631d": "f397e58aa14ae600041bd0336d95a508",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/6bf25cda033baabebd479934c76345800eeb38": "c4e41fea8b8d947e3eaf9a75366cd614",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/627699456b12e98f9c1b2e34738b5194a8cad9": "607f198d0b09569ffa763522aaa550ff",
".git/objects/c3/53e3141d63bd14298e9591102c72cdca3f4b8e": "523e2222e5e42409b9988cd1f2585d24",
".git/objects/c4/46e0bdd4268ff79f3f23e91c2d0bcb90db9c9f": "b065764c3abd61cdc2c57937dc0ebb61",
".git/objects/c4/128f306e496dc13fbd87dbf201d162a29ff29e": "ba99305bc06f92525574b9ee9d658bb9",
".git/objects/c4/e5c91d863fb38a65e5b9316b3259bf5676e68e": "d798154f3f120b4321b6b7b4586c9d3d",
".git/objects/cd/ef34c278fb5e62ef550ae10cf2f60a25cf14ec": "0305758b164943ac066dd8142987fbb7",
".git/objects/cd/9596d477848e7384555a4953fdec0220f43720": "7aab7791f8618c9073f0b74f253d6162",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/0d486539f2ddc943aa7fddf43db10e0abd2406": "1f3d8652900ea21a01d9447b43b44812",
".git/objects/e6/05a46161ea48bd50b0c1f02eee0da311cfb049": "e79f53d493066c2324e37ec6561a532d",
".git/objects/f7/90d619564946b7cf773169aaf94e22bc582ac7": "80dbdaf3b6cc017343a6ae14d4ddb849",
".git/objects/c5/6ab3ab555afba809cef6503fceecd0a21d8e37": "f25f94e0fdc283760e8663756277ea04",
".git/objects/c2/155f5915d74acab0b075a6d6895af43a50ec08": "459e7575ecd8fa51ab16ba9e6c6cc290",
".git/objects/f1/a53f86211d3340aafbfe49108969b40ab64b74": "58e46aa55071cff186edfaf3c32cafd6",
".git/objects/e7/0baa08139141330e587a4c52f607627af12981": "a7ac121d7f04c09e7b69198607c63bf3",
".git/objects/cb/fa8c3f57b9652270364c695ed6b158d0e13da7": "0bbef818b5659b631c637c082bc0d267",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4071ec3d35a2e99d80286cce7b2074ab680a6e": "9b45ce6b35d688413c686e4e75b19d17",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/aa8e702156c81a5a992a652e87911f44f6a37e": "e0b8591e65b4df64d9df452cbd408ff8",
".git/objects/83/eb0c3cddda8972f772d28541464b011ac2104c": "ebb1f8ac09a581fb027ff5c0d43fca81",
".git/objects/77/d573383b0e46aff620c55ce28e33f9fb3a2c73": "68c2e044b5cc09ccc1a84b2eebbf9f82",
".git/objects/77/5e13d2623a25c365590baf1400c610e6314a03": "fd1f29a6c94e9b2a1d307da7c475695c",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/48/dac4b1cb80b793b4bc13e33fa2c727d0b17ac9": "0e489eb5fbe06da68b0fe745dfbf70bc",
".git/objects/48/4967fde489650e130c8570afe3adace7aeaee3": "415006cdd31426ca26ef60f284c6a5cf",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/84/75ded11091a0afe2e97c37ec9188dda73ff8f4": "8bf95f18e35a2145b4c2056ad09fa946",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/2717bcb4c6bca5933f3749a4c49fcdae17b214": "5f31549fad3c24619e929e6236ce8c58",
".git/objects/4f/2f725895a142a3206c3018f51b2ba0d1243dea": "7d8f512cd88eabf3d2150bcb51f06578",
".git/objects/8d/5cb6b74b9cbc592c942e8ae54bdb8bf96fd1ef": "d4c00146bacee86301d1a738edaebcaa",
".git/objects/15/529ad4f6af6e741b713a861a2623d173fc727c": "51598746955021e2a7187bca9d80c351",
".git/objects/12/1be65d710eed5309ff2ec577e4f7c6fcca2916": "ed8ced9182e8dbccd4784bce3bb0de87",
".git/objects/8c/6f286ed908b975a1af14cfb504a96598a0ad94": "bdb84b4a8a89e5f09b70a0c4fdd6b32d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/7c763fd395e10ab5c969b9dfbcb5f550723bfd": "cd070fbbf40f6d66cd494e56f6865d49",
".git/objects/49/1ec8aec905017ceef87fa4af96b25741d0c760": "488fac7cb2af5eb064110be2608e541c",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/3a9b62e87ce3d42f97efb07934bd5d525bd694": "b8289fa0933923ff597bc639b9c97058",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/47/01bbe11725356022b10caf81317a4ab4c5cd62": "78d11d07f9193ae67189da6a1cfefe76",
".git/objects/47/18442ac08465f900d9365326728dda1dd764e7": "0f1eff0694363dc672fdf9d15916345c",
".git/objects/8e/937217b344528486170f9e84064e820f0bd702": "74f4382ef6f422053c3cac40f2cbd016",
".git/objects/8e/8917c9aff209dc1e10dc42ef5c6e966e56e563": "b34d193219d0b37f3e643edb181802b3",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba05ad7bbaa578c171fc959a86b23ba2",
".git/logs/refs/heads/main": "eb9b34e6df45255273a94e5269656726",
".git/logs/refs/remotes/origin/main": "21287adcbd81715737ad88059ef799bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4432fb87d9183777865862efd562f150",
".git/refs/remotes/origin/main": "4432fb87d9183777865862efd562f150",
".git/index": "a658479a084f0a210367f18ddf08d1c5",
".git/COMMIT_EDITMSG": "f7e229a0f59e0d40db631a21cb930713",
"assets/AssetManifest.json": "50e100d48b4eb8827cec4abb52391261",
"assets/NOTICES": "f26ab9d3f923c2996fa0c27967048adc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5916c72cc3c298b17ce688343a05450e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "921fa09eefd1404ccb06689c72bdef5b",
"assets/fonts/MaterialIcons-Regular.otf": "c70cd6830974711c121dcecd20cb6179",
"assets/assets/camera1.jpg": "4d04e3a59de82211df266551e7c79950",
"assets/assets/tutlebolt.png": "adb41928b48c10eb0e075f4170f7a65b",
"assets/assets/dragonfly_active.png": "f9ac359401e02fc51f3c1c9365ff799c",
"assets/assets/dragonfly.png": "d6455b2b5439c1ef51972290137111f2",
"assets/assets/camera2.jpg": "840fd445f90853b2e4a6aa5940bfe9ea",
"assets/assets/tutlebolt_active.png": "9719bf689da984545552723e9a860301",
"assets/assets/chemicalSensor.png": "8bbb17f1fa4ff8cfde56abc6106e2438",
"assets/assets/drone.png": "5dacae1f1e4162168e1ebe7fd17f0483",
"assets/assets/app_logo.png": "c7076b7caec083913be322e859ef6f4a",
"assets/assets/drone_active.png": "b39c896c41ba25a063c2bd957c9c99f5",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
