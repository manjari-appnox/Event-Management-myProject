module.exports = {
    SITE_END_POINTS:{
        SITEBYID : 'site',
    },
    USER_ROLE_END_POINTS:{
        ROLEBYID : 'role'
    },

    REQUEST_METHOD:
    {
        PATCH:'patch',
        DELETE:'delete',
    },
    TENANT_END_POINTS:{
        TENANTBYID : 'tenant',
    },

    DEVICE_END_POINTS:{
        DEVICEBYID : 'device',
    },

    DEVICES_END_POINTS:{
        DEVICESBYID : 'devices/process',
    },

    PROCESS_END_POINTS:{
        PROCESSBYID : 'process',
    },

    DEVICE_ASSIGN_END_POINTS:{
        DEVICESBYID : 'devices/assign',
    },
    

    DEVICE_UNASSIGN_END_POINTS:{
        DEVICESBYID : 'devices/unassign',
    },

    PRODUCT_END_POINTS:{
        PRODUCTBYID : 'product',
    },

    ROLE_END_POINTS:{
         ROLEBYID : 'role',
    },

    ZONE_END_POINTS:{
        ZONEBYID : 'zone',
    },

    DELETE_BY_EXIT: 'Exit',
    DELETE_BY_STOPANDEXIT:'Stop or Exit',
    EXECUTE_PROCESS:'ExecuteProcess',
    ACTIVE_PROCESS:'ActiveProcess',
    INACTIVE_STATUS:'inActive',    
    INACTIVE_TENANT:'Inactive',
    

    TIMEOUT:5000,

    // for external communication
   PLATFORM_SUPER_ADMIN:'Platform Super Admin',
   PLATFORM_ADMIN:'Platform Admin',
   USER_ALREADY_EXIST:'userId already Exist',
   USER_NOT_EXIST:'user with this userId does not exist',
   USER_DELETED:'Successfully deleted user',
   EVENT_NOT_EXIST:'Event not exist with this id',
   EVENT_UPDATED:"Event updated successfully.",
   EVENT_DELETED:"Event deleted successfully.",
   EVENT_IS_FULL:'Event is full, cannot register',
   ALREADY_REGISTERED:'User is already registered for this event',
   TokenExpire:'1h'



}
