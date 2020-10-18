module.exports = {
    development: {
        DELIMETER_CSV: '*~|',
        FILE_NAME: 'YYYY-MM-DD',
        START_DATE_FORMAT: 'YYYY-MM-DD 00:00:00',
        END_DATE_FORMAT: 'YYYY-MM-DD 23:59:59',
        SFTP_DATALAKE_PATH: '/FinnOne/Payment/Out/',
    },
    production: {
        DELIMETER_CSV: '*~|',
        FILE_NAME: 'YYYY-MM-DD',
        START_DATE_FORMAT: 'YYYY-MM-DD 00:00:00',
        END_DATE_FORMAT: 'YYYY-MM-DD 23:59:59',
        SFTP_DATALAKE_PATH: '/TCL_DATALAKE_PROD/inbound/systemx/',
    },
};
