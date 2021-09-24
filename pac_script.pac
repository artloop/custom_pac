function FindProxyForURL(url, host)
{
 if (dnsDomainIs(host, '*.chaturbate.com')) 
    return 'HTTP 49.12.194.252:54922;';
 if (dnsDomainIs(host, '*.myfreecams.com')) 
    return 'HTTP 49.12.194.252:54922;';
 else {
    return 'DIRECT';
 } 
