var uniqueConfig = {
  client: 'pg',
  connection: {
    database: 'tetris',
    host: process.env.BASE_DB_HOST,
    user: process.env.BASE_DB_USER,
    password: process.env.BASE_DB_PWD
  }
}

/*

 N        M   .M   MOM    .N8M.  8M. .8.   NM ..MO8.  ~O,  .8MZ   7MOM.  ?M   M8O
 N ..  .  M   .M   M8M .  .M8M.  MM. .8.   N. .M888M  .N.  MM. ..   MM.  ?M   M88
 888    M8M    M   M8.  D  78M.  .M. .8   .$...OD8DD  .M...8.  .N   .M.  ?M   M88
 888.   M8M        MN.  M  .8M.   8  .8      .MDD88DM..  .MD   .N   .M.  ?M   M8O
 888.   M8M   ..   MM  .M   MM.      .D   .   MDDDDDD.   .ND   .N   .M.  ?M   M8O
 888    M8M   .M   MZ       NM.  .   .D.   .  .D8DDDDM   MDD.  .N.   M.  ?M  .M8O
 888.   M8M   .M   M   ...   M.  M..  D.   M.  MD8DDDM   M8D.. .M.  ,M.  ,N   M88
 888... M8M....M...M....8... M ..D ...8... N....MDD8DM...MDDM.......N8M..  ..D88O
 888888888888888888888888888888DDDDD8OZ$$$$777$ZO88DDDD8DDDDDDDNMM8OOOO88MMD888OO
 88888888888888888888888888888DDDD8Z$777IIIIIIII$$ZZ8888D88ZZODDDDD88OOOOO8888OOO
 888888888888888888888O888888DDDD8Z$7IIIIII?IIIIIII77$$$OZZ$$ZZODDDD8OOOOO888888O
 8888888888888888888888888O8ODDDDO$IIIIIIIIIIII????IIII77$$$$$$$ZDDDN888O888OO888
 8888888888888888888O88888888DDDD$7III?I?I??????I???I?III777$$$$$O8DDDO888888O88O
 88888888888888888888888888O8DDDZ$7II????????????????IIIII777$$$$Z8DDDDO8O8888888
 8888888888888888888888888888DD8Z$7II??????+++++???????IIIII7777$ZO8DDD8O88888888
 88888888888888888888888OO8888D8OZ7III????+++++++++????IIIII7777$ZZ8DDD8888888888
 8888888888888888888888888OO8888Z$III?????+++++++++?????IIII77777$O8DDD8888O8888O
 88O88888888888888888O8OO8O$8DOO7IIII????+++++++++++?????II77777$$ZDDDD8O88888888
 8888888888888888888888OOOII78O$IIII????+++++++++++++????III7777$$ODDD88888888O88
 8888888888888888888888OO$I+?8ZIIIII777I?++++++++++++???I?II777$$Z8DD888888888888
 8888888888888888888888OZ???IO$III7777$OO8OZ7I?++++++??????II77$$ZDDD888888888888
 888888888888888888888OOI?IIIZIII??I7$$$$$Z$ZZZ7????I7$77777777$$ODD888888888888D
 888888888888888888888OZIII+$$I????I77+$O$?Z$I???II7ZO8888D88OZ$$ZD88888888888888
 888888888888888888888OZ?I7?I7II?+?+?I777I77I??++?7$77$ZZO7Z7$Z$$DZZ88888888888D8
 888888888888888888888OOI??II7II??++++??????????+?7?$I=$Z$IOZ$$$$DOO8888888D88D88
 8888888888O88888888888OZ?++?7II?+++++++++++???+?I$I?I77II7Z$77$8OZO8888888D88D88
 8888888888888888888888OO7+++III?++==+++++=+???+?I7I??II7777II77DZO888888888888DD
 8888888888888888888888OOZI?IIII??++=+==+++????+?77I??????IIII$Z8OZ88888888D8888D
 88888D88888888888OOOOOOZ7II?I?I??+++=++++?????+?77I????????I7$8OOZ888888888D88D8
 88888888888888888OOOOO??Z8$?II???+++=+++???????II77I?????II7$$$O$O8888888D8888D8
 88888888888888888OOOO+?ODD$?I?????++=++???+??+?I77$I?????I7$Z$$$O888888888D88DD8
 888888888888888OOOZZ+=$D887?I?????++++?++I7I?+?777$7???II7$$$$$O8888888888888D88
 88888888888888OOOZI===ODDDI?I??????++??????+?7$Z$$7I??II77$$ZZO88888888888888888
 88888888O888OOOOI===~=8DD8I?+???????????????II777IIIIII77$$O88888888888888888888
 88888O8OOOOOOO7+===~~=ODD8I?+???????????+++?I?I77II7II7$$$ZO8O88888888888D88D88D
 88888O8OOOOO7+===~~~==$8DDI?+??????III777$II?I7II7I77$$$$$OO88O88888888888888888
 88OOOOOOOO$?======~~~~IDDDZ??++???????I???II777$Z$$77$$$$OO88888888888888D888888
 8OOOOOOZ7++=======~~~~?ZDD8$??+?I?????II?I??II77$777$Z$ZOOOO8888888888888888D888
 OOZ$+=~~~~~=~=~~=~~~~==I88DD7????I?I???II7$$$$Z77$$$Z$7777ZO888888888D8DDDD88D88
 7==~~~~~~~=~~~~~~~~~~==+ZDDDD$???II???????I?III77$$ZZ7777$$$$Z888888888D8D888888
 ==++++======~~~~~~~~~~=+?DD8DDZ????I????+????II7$$$OD77II7$77$7ZO888888D8D8D8888
 ===+=+++?++==~~~~=~~~~=++8DDDDND$????I??????II$$$ZZDDZIII7$$7I777$$$ZO888888888D
 +====+====?======~~~~~=+=IDDDDDDDZI???I77$$77$ZZ$ZDDDZ7???7$7I?I??III77$O8888888
 ++====++=~~=~=~===~~~~===+ODDDNDDDDZI?I?III7$$ZZZONNDOI?+++I7I+++++?+??III$8888D
 ==++===+?=~=~===~=~~~~===+?DDNDNNDNDOI??I?I7ZZZZONNNDO?====+I7?+=+++++++?+?IZ888
 +===++==+I+=~=~==~=~~~~===+$DNDNDDNND8$II7$$$$$ODDNDD8+=~===+?I+====+==+++++?$88
 ?+====++=?7+===~=~~~~~~~==++DDDDDNDNNNDO$77$$$ODDDDDD8+~~~~~+???+====+===++++?Z8
 ==++==+=++?7=~=~=~~~~~~~===+?DDNNNDDMNNN8OZZ$ZDDNDNND8+~=====???+====+====++++7O
 =+++I==+==+?=~~=~=~~~~=~===++$DNDDNNNNNNNND8ODNDDDDNDO+==~=~~=7?++====+=~=====?Z
 ~O     DM==+     ?=~=M    M?=.     =M.    7MNDNNNNDM  ..M~~=ZM   :M~~    .7MM=+7
 ~O    .  O==.  .  ~=       .Z      =M. ...   MNDDN.  ...  =M. ...  $=.   .   ~+I
 =O   M:  .=M      MD. .8M ..M    MNNM.   M   MDDDM   $7.  M7.  M    I.   M   .+?
 =O  .M  ..+M  .   M?.   .M==~.   MMMM    M   DDDDM   $MMMMM=   M    $.   M   .??
 ~O    .  M?=  :M  .==M .   ?=.   ..MM.   M   DNDDM   $    M=   M    O    M   .?+
 =O   M:   M   MM   8MMMM    M    M~=M    M   DDDDM   $M   M=.  M.   O.   M    ?+
 ~O  .M:  .M.  .    M   7M  .M    MMMM. ..M   MNDNM.  $M   M7. .M   .7.   M   .=+
 =O       .M. .MM   7$      .M.      M       .MDDDN. . ..  MM.    . M+        .=?
 =MMMMMMMM?MMMMM7MMMM=MM. 7M~~MMMMMMMMMMMMMMMMDDDDD8M7.MMMMM=~M7.:MMI=MMMMMMMM=++
 =~========~===++======~~~~~~~~~~~~~~~~$OO8888888O888O7===~~~~~~=?II+=~~=+~~+====
 */

module.exports = {
  development: uniqueConfig,
  production: uniqueConfig
}
