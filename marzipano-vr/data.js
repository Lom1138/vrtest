var APP_DATA = {
  "scenes": [
    {
      "id": "0-360_microsoft_draft4a",
      "name": "360_Microsoft_Draft4a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.34561329314477
      },
      "linkHotspots": [
        {
          "yaw": 1.2102293564836586,
          "pitch": 0.27382017197410136,
          "rotation": 0,
          "target": "1-360_microsoft_draft4b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360_microsoft_draft4b",
      "name": "360_Microsoft_Draft4b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1376970812709963,
          "pitch": 0.3147583427948213,
          "rotation": 0,
          "target": "0-360_microsoft_draft4a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
