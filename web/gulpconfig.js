module.exports = {
    // "dev": {
    //     'location': 'E:/o2server/servers/webServer/',
    //     'host': 'dev.o2oa.net',
    //     'user': 'xadmin',
    //     'pass': 'o2No.one',
    //     "port": 21,
    //     "remotePath": "/",
    //     "dest": "dest"
    // },
    "release": {
        'host': 'release.o2oa.net',
        'user': 'o2web',
        'pass': 'o2No.one',
        "port": 21,
        "remotePath": "/",
        "dest": "D:/O2/github/o2oa/o2oa-release/o2web/source"
    },
    // "wrdp": {},
    "dev":{
        'host': '172.16.95.50',
        'user': 'root',
        'pass': 'zone2009',
        "port": 22,
        "remotePath": "/data/workspace/development/development_appdev/target/o2server/servers/webServer/",
        "dest": "dest"
    },
    "appdev":{
        'host': '172.16.95.50',
        'user': 'root',
        'pass': 'zone2009',
        "port": 22,
        "remotePath": "/data/workspace/development/development_appdev/target/o2server/servers/webServer/",
        "upload":"sftp",
        "dest": "dest"
    },
    "f":{
        'host': '172.16.92.11',
        'user': 'root',
        'pass': 'zone2009',
        "port": 22,
        "remotePath": "/data/o2server/servers/webServer/",
        "upload":"sftp",
        "dest": "dest"
    }
};
