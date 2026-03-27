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
        "yaw": -1.3444917013605426,
        "pitch": 0.08760497109344278,
        "fov": 1.34561329314477
      },
      "linkHotspots": [
        {
          "yaw": 1.2412624141767878,
          "pitch": 0.25319568509144297,
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
          "yaw": -3.1164762761750318,
          "pitch": 0.22864361890434282,
          "rotation": 0,
          "target": "0-360_microsoft_draft4a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
