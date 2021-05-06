'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3e1a78bed58ec16f24658aa5c77f0e9d",
"index.html": "dc0f48c072d905e0e66568a9c9839d13",
"/": "dc0f48c072d905e0e66568a9c9839d13",
"main.dart.js": "165fcc3fde840e0b4b96b5175b476477",
"favicon.png": "ba213fbbbd874ed65098deb1ce97f2ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4e1c506ab1a02bc2508ab018a8883a9",
"assets/config/prod_config.json": "452e26ba7c21c093954c4754e737bef5",
"assets/config/dev_config.json": "c1a4ca2e4e7e0fb674be2ee59485be2c",
"assets/config/local_config.json": "70d77267e3e2006afd8852328176fc17",
"assets/config/stg_config.json": "eee226c1821cf80ad211dc55bce49d44",
"assets/AssetManifest.json": "66253f459433cc8a6655ff6d385a8c8f",
"assets/NOTICES": "68b827e213f3bdbdbe29af830574d7a4",
"assets/FontManifest.json": "74f79d9a18247bd27312413d5d3511cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5ee1f285611168cd6df377fd21151aae",
"assets/lib/lang/en.json": "10f13bf8c5d49af27960391382b120a5",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/toyotabg.png": "9592f25ccb0ac9c1c2cbb91cdb3e17a0",
"assets/assets/images/toyota-logo.png": "bab4178d5260f16dfe35c8d2459fa73a",
"assets/assets/images/package_select.png": "25c5fed49244c318a7fd744a22b7fc9b",
"assets/assets/images/notification_top.png": "a4f482a3bf5365b501e658b55c06c48b",
"assets/assets/images/user_management.png": "fc1c712b604edd6372031c158e8c67bc",
"assets/assets/images/license_unselect.png": "d7bce4ec01df340f8b98d52e4dfa8f58",
"assets/assets/images/plus.png": "e2fb85b3783e05b4a141384437991b10",
"assets/assets/images/dateTime.png": "5e5c34053e072bbb35cffd6fe0959806",
"assets/assets/images/flag.png": "9051cd22079afc8e9a111af4abbf9359",
"assets/assets/images/registration_failed.png": "7166e94175b14a81bbadbba4d49818a8",
"assets/assets/images/user-placeholder.png": "ddef75ca1668564d580e5b2a944f89df",
"assets/assets/images/down-arrow.png": "8b6c9add6023f9e1b4bd45ea1339515c",
"assets/assets/images/unselected-radiobutton.png": "39e0b7abd206ff4e7e471aeae75f14e7",
"assets/assets/images/reports_unselect.png": "6627c3c67998ffa70d177fbcf34f19bc",
"assets/assets/images/registration_success.png": "2a2541f522fb15842daec03c9d3a07f4",
"assets/assets/images/filternext.png": "1ec4a8f0c264bd4ef95201501796d862",
"assets/assets/images/logs_unselect.png": "2301bd16c205241971fa6924ab0ccb19",
"assets/assets/images/rollback-dropdown.png": "ed3b7e95142f0b2accf86524a3466efa",
"assets/assets/images/rightarrow.png": "a43dbd630d7b33969e97fe9c93e9fc1b",
"assets/assets/images/leftarrow.png": "d1d44b6abd5532a26037898c52283b2f",
"assets/assets/images/close-Icon.png": "d67067d02ca1055319f4f06a58b96d2f",
"assets/assets/images/app_management.png": "120826b51d8ae534ed49a77cc430c039",
"assets/assets/images/filterprevious.png": "e7fd47a9dfbec367d03dfb743e52927d",
"assets/assets/images/upload_app_package.png": "27f185225bdd4c8d7c8d2721435bc2b0",
"assets/assets/images/toyota_collapse.png": "451f2364c0af7c2ba2f86f598362416b",
"assets/assets/images/upload_package_side_menu.png": "a28355c5ffae15f43ecb34355b636eab",
"assets/assets/images/selected-checkbox.png": "5b464e72ca209414f0b5a26796ec6eb3",
"assets/assets/images/notification_management.png": "335acefa4258f5237814dd0df050ac82",
"assets/assets/images/notification.png": "8b7c2fc4aadbf247fde0a3c4f543c9db",
"assets/assets/images/up-arrow.png": "f4e04257465de13daf6b27ba19920dd7",
"assets/assets/images/unselected-checkbox.png": "c57764712be347fb31550490768dd7c4",
"assets/assets/images/selected-radiobutton.png": "7365eb504d2323927f422e1143fc0ba3",
"assets/assets/folder.png": "41fdd6e6bca1754d1cb12dd686c871a9",
"assets/assets/edit.png": "204b590ca24a1a4aa98da22475fa467d",
"assets/assets/toyota_access_logo.png": "9e4354f0ab717ea8e6c49635647eb1bc",
"assets/assets/fonts/ToyotaType-SemiboldIt.ttf": "d085097cf6a19fec8ea0f3dad8331509",
"assets/assets/fonts/ToyotaType-Book.ttf": "281b8904873913a00a10b41584372556",
"assets/assets/fonts/ToyotaType-Bold.ttf": "755ac808845779e6aa71ac9f211e954a",
"assets/assets/fonts/ToyotaType-Black.ttf": "7f19429deb75880a47921d57882f2491",
"assets/assets/fonts/ToyotaType-RegularIt.ttf": "9fc0af0a795de3ff8ba7882dd5f91afc",
"assets/assets/fonts/ToyotaType-LightIt.ttf": "1b31986af9cb3af2be6845b30e5b3958",
"assets/assets/fonts/ToyotaType-Semibold.ttf": "e3f0fa1113dc23d972b38186c82fd5de",
"assets/assets/fonts/ToyotaType-Regular.ttf": "7e825c39f15050069cf660719d9409b7",
"assets/assets/fonts/ToyotaType-BlackIt.ttf": "3be006b41e7cb030d35e8ca116ffa3cc",
"assets/assets/fonts/ToyotaType-BookIt.ttf": "2e5a3e2aeeb3d17f7f3c0dd69646cac9",
"assets/assets/fonts/ToyotaType-BoldIt.ttf": "7fa90be7851ce19a9509451736f5404f",
"assets/assets/fonts/ToyotaType-Light.ttf": "93cde6c18d42b020d71098387742aba8",
"msal.js": "c4de5cc6c2780846186078e69f6d79a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
