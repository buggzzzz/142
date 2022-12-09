var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.9000074757344034,
        "pitch": -0.01180752257650397,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -3.008284975016627,
          "pitch": 0.09848322594279324,
          "rotation": 18.84955592153877,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21681028728110796,
        "pitch": 0.036872062759805146,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.0053717279725767,
          "pitch": 0.5067859443871736,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.06894427109769197,
          "pitch": 0.049647926158504774,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8939395072944638,
          "pitch": 0.22706207180229754,
          "rotation": 0,
          "target": "3-kitchen-2"
        },
        {
          "yaw": -0.5059728684970608,
          "pitch": 0.07672535229180255,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.979044171801206,
          "pitch": 0.20818347063522324,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": 2.9058881224026756,
          "pitch": 0.19386083024510548,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-2",
      "name": "Kitchen 2",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.04807404189433129,
        "pitch": -0.016593664101666405,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.6919781378140861,
          "pitch": 0.1080232807682151,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.2277308123690993,
          "pitch": 0.17530771182090632,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.93780971942374,
          "pitch": 0.23279066437166307,
          "rotation": 0,
          "target": "3-kitchen-2"
        },
        {
          "yaw": 0.38341334609130406,
          "pitch": 0.16766902380423332,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": -0.5888642838192766,
          "pitch": 0.12013565688526562,
          "rotation": 4.71238898038469,
          "target": "6-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
      "name": "Bedroom 2",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6535665950742295,
          "pitch": 0.20797093607463424,
          "rotation": 7.853981633974483,
          "target": "6-bathroom"
        },
        {
          "yaw": 2.198660706664045,
          "pitch": 0.1862433494406357,
          "rotation": 4.71238898038469,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "Bathroom",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45060320107682905,
          "pitch": 0.3006752861144264,
          "rotation": 0,
          "target": "7-bathroom-2"
        },
        {
          "yaw": 2.721919626768865,
          "pitch": 0.10202547509390669,
          "rotation": 4.71238898038469,
          "target": "5-bedroom-2"
        },
        {
          "yaw": -2.526017466018189,
          "pitch": 0.15075475988034626,
          "rotation": 1.5707963267948966,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom-2",
      "name": "Bathroom 2",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.02766238834271384,
        "pitch": 0.001545911946035261,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.6421681170938704,
          "pitch": 0.48975763633477776,
          "rotation": 9.42477796076938,
          "target": "6-bathroom"
        },
        {
          "yaw": -2.4381626760294104,
          "pitch": 0.20338592226477736,
          "rotation": 1.5707963267948966,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.9288762518170817,
          "pitch": 0.21764910842475516,
          "rotation": 17.27875959474387,
          "target": "5-bedroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
