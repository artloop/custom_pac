function FindProxyForURL(url, host) {
 if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.com'))
    return 'PROXY 49.12.194.252:54922'
  if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.eu'))
    return 'PROXY 49.12.194.252:54922'
 if (isPlainHostName(host) || dnsDomainIs(host, '.myfreecams.com')) 
    return 'PROXY 49.12.194.252:54922'
 if (isPlainHostName(host) || dnsDomainIs(host, '.cam4.com')) 
    return 'PROXY 49.12.194.252:54922'
  if (isPlainHostName(host) || dnsDomainIs(host, '.xlovecam.com')) 
    return 'PROXY 49.12.194.252:54922'
 else 
    return 'DIRECT'
}
