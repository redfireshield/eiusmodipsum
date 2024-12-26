function createPermissionMap(permissionMap) {
    const buildPermissionMap = (permissionMap == null) ? {} : permissionMap;

    // You can now use buildPermissionMap safely
    console.log(buildPermissionMap);
}

// Example usages:
createPermissionMap(null); // Logs: {}
createPermissionMap({ read: true, write: false }); // Logs: { read: true, write: false }
createPermissionMap(undefined); // Logs: {}
