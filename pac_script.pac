function FindProxyForURL(url, host) {
 if (host == 'chaturbate.com') 
    return 'PROXY 49.12.194.252:54922'
 if (isPlainHostName(host) || dnsDomainIs(host, '.myfreecams.com')) 
    return 'PROXY 49.12.194.252:54922'
 else 
    return 'DIRECT'
 }
