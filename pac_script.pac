function FindProxyForURL(url, host)
{
 if (shExpMatch(host, '*.chaturbate.com')) 
    return 'PROXY 49.12.194.252:54922;';
 if (shExpMatch(host, '*.myfreecams.com')) 
    return 'PROXY 49.12.194.252:54922;';
 else {
    return 'DIRECT';
 } 
