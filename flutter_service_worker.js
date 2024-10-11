'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "b3d10e20e372f854436101a2d34846c0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d2d9eb1cfda5d14d731fa98c8096c04a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20076fbdbbe399971af3c3e4524c29dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e137b694f87d471443b32b67d60602ec",
".git/logs/refs/heads/main": "3a0bb761ec881b31e53c06f09616fd4c",
".git/logs/refs/remotes/origin/main": "72d9012e974b40d49550d150784a2fc5",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/872e12a98a1788bd600f191acf946e3c313866": "39794f4315c084cc6dcd102e5508c7b8",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/07/3f4192525cd5c71e8c9ce5a6392c3cccc0220a": "fb0e26640dc43797b5be993e1086063a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/6b8e5fb8e1f56a159718251b06724671c0253d": "c89be1e84632599cf99bd7eb69e56287",
".git/objects/0e/3f3bde3cef0e28814e7e41db7ea5523054ebf9": "e8d86315e5093b7d165f2371527413c5",
".git/objects/1c/699cf14a3a4ad9b512b0d6f992515a200a96a7": "16067e39f81272e79535a93c5d4e9356",
".git/objects/1e/89f15663509459a567e7432b82a6a9fa021fa6": "e0d6a467c0409a4318f0149e3870d828",
".git/objects/24/4c091238920ef82c5730f167885dd28dba71b7": "17e3d68ea24d51fc0798844ff08375cb",
".git/objects/24/bca599992b325042137ff3553ef1776f095203": "9cd04917f11c601aa1fcf0774c4e7f0e",
".git/objects/28/5655ae0768e16fbeaee1acc6e0a90ca601c135": "80b82d04b47275cdf0e0f6741ebf5cef",
".git/objects/31/a2ae2f19dd3f711e1c7efadb28a16e42ebd899": "d631034ef41211d493535d9092609e17",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/4e211b181614639f53d33b76dcfff2ab72e493": "7636ca74e3a3a1b79918cec6c9803a4f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/50/7f421646e1be168f8d18e737b78d7d5ddf5984": "eeb93dee77fe7b03ad477fbd99618db6",
".git/objects/56/7a4be563dd9d667640d32cec06d19fa2cd88e1": "572059a38f4408fdb413679d7e0f8c2b",
".git/objects/62/e0c66bd65de39c96d312b08ba0de1b5dd8c957": "d9a785cbe5b611b81f6c56afec0204b2",
".git/objects/66/8b8dfd2eb55216a1f676d4f559dc0a0e45cb44": "a57b51a4a33ae48e9027ce96f10217fc",
".git/objects/6a/a674adc6258cf88c34e06406cbf0fa3de63861": "1320fac9046eda19c02ab6820930e9c2",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7a/f4d9edb9dbe7c3933d6a16f16ad1280f891f8d": "b92848915bc819a54e93248a65fe099f",
".git/objects/7d/7e1b4d159697ffd4ea66e29a8b8edf87f92b15": "e31e1005788e4fd04394b201d01346f1",
".git/objects/7f/d1fe16d108e63924318c657329e53a4d98aa42": "e1b13b7965a98d32a6b95b8a5e0fdeff",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/8d1844ce42e059501cf8dc8fcfa9ed9703a863": "62bfe01a2b45e1fbb31a9e9dba654d9d",
".git/objects/8c/6bf548bba0c970860842c97e8c82f172b5c6eb": "e17e9676802b2d5eb31e96f60149d81a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/57cda98cd4202c7d9bf9dec8ed4304b02e86df": "e344cca308c915c876ecbfe3b0ef6611",
".git/objects/a2/98b6c5076a63ee6e255e95a78ec0fde823f9bc": "40cf78eb8e2fcedf5510c7c183aeb67c",
".git/objects/a8/736bb24df14c290f89a86f0483aa4363229875": "9f4957a1403bf32e0f1df7bf6903440a",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/239b1794637b766b765684be0500c463b37422": "55bd411113245c18ecf6d369f5ce257d",
".git/objects/af/39d65aeca3c87c35e9b6ac8c3b553f0324cecd": "a8fcf816288f16e0d26bdab1b76be9df",
".git/objects/b0/12cb393ba1bbc247ed2afc1f1a1ca13938c154": "839672ce53eb612b1158def0fd63ddf5",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/7a218964a1957ae494bcc76d234e5bd0a94e61": "3b46c6c090f023f1cc17806d75790e29",
".git/objects/ba/a7155dfc51ab93e17d168d9dde128471f2cf27": "6991757e9453e5e67cdd30750cbd3ea4",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/cc/a5dc8db45387d30f1a317634f4592dccd362b1": "3d61fbc7b572e6df2337648135b655a8",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/49aa38b0d52484f8a726797fb7dc10bcc88b36": "3369d7695d7944dcfd39d21388e3b3b1",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/7f34df2b220d9e956057bce1973d0995d7f45a": "0498e74b6089b2e22066f9f21f749caa",
".git/objects/fc/0930dd0400d5aa52de1845315071a52f52179a": "b5a4ad754e1e85edbb3300745b7b4cd4",
".git/objects/ff/9ae8bd1a5183f1783528fdd011b42e6ee5592c": "af40782e6572a33b297e52e6fe48d103",
".git/ORIG_HEAD": "4bf569d902ea8097fa18cdde43bc4486",
".git/refs/heads/main": "4bf569d902ea8097fa18cdde43bc4486",
".git/refs/remotes/origin/main": "4bf569d902ea8097fa18cdde43bc4486",
"assets/AssetManifest.bin": "f3446afe07bd4532fa7d1144879eafea",
"assets/AssetManifest.bin.json": "fb7ef60603279e4964edd427a7ebedc2",
"assets/AssetManifest.json": "bb3ccea8223cd7a2bdd2264ba823398a",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/images/email.svg": "5837d3c40f8f786fe50f08af0ca0937a",
"assets/assets/images/favicon.png": "9f0fa30080686f4bad6977ea8f0f6419",
"assets/assets/images/github.svg": "49bbaade04dd0f13bd243d6ad96429e3",
"assets/assets/images/instagram.svg": "daa4ae1419f7436e2f26fb07a08179f8",
"assets/assets/images/linkedin.svg": "c0b1f596616485a024f9782f6779fabf",
"assets/assets/images/Profile.jpg": "0e73f0ba6e20855648fe6d26acbb3400",
"assets/FontManifest.json": "814eddb2c668fa622b7eb0fa27a626c2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "49c665730a20bc998a3323628efe3094",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "10aeaf4c572f7784ef913b2e4b22b074",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c07b4c3c964f8716a4e5724009aefc9b",
"icons/Icon-192.png": "2d8bd9909e79284b7471e9ab25357040",
"icons/Icon-512.png": "660e425bf74199bc3b783fd33abb7f2b",
"icons/Icon-maskable-192.png": "2d8bd9909e79284b7471e9ab25357040",
"icons/Icon-maskable-512.png": "660e425bf74199bc3b783fd33abb7f2b",
"index.html": "ed72fe527d9f1fc583f2de9a1b629d8f",
"/": "ed72fe527d9f1fc583f2de9a1b629d8f",
"main.dart.js": "6ee65dab38e4700e9b3f8f1685fa478b",
"manifest.json": "3fb5a5e71d30ce9a74576b3464ba0b26",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
