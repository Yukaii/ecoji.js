//This should sort before everything.  This is output when 3 or less input bytes are present.
export const padding = '\u{2615}'

//The following paddings are used when only 4 of 5 input bytes are present.

//This should sort between padding and emojis[0]
export const padding40 = '\u{269C}'

//This should sort between emojis[255] and emojis[256]
export const padding41 = '\u{1F3CD}'

//This should sort between emojis[511] and emojis[512]
export const padding42 = '\u{1F4D1}'

//This should sort between emojis[767] and emojis[768]
export const padding43 = '\u{1F64B}'

let emojiMap = []

emojiMap[0] = '\u{1F004}'
emojiMap[1] = '\u{1F0CF}'
emojiMap[2] = '\u{1F170}'
emojiMap[3] = '\u{1F171}'
emojiMap[4] = '\u{1F17E}'
emojiMap[5] = '\u{1F17F}'
emojiMap[6] = '\u{1F18E}'
emojiMap[7] = '\u{1F191}'
emojiMap[8] = '\u{1F192}'
emojiMap[9] = '\u{1F193}'
emojiMap[10] = '\u{1F194}'
emojiMap[11] = '\u{1F195}'
emojiMap[12] = '\u{1F196}'
emojiMap[13] = '\u{1F197}'
emojiMap[14] = '\u{1F198}'
emojiMap[15] = '\u{1F199}'
emojiMap[16] = '\u{1F19A}'
emojiMap[17] = '\u{1F1E6}'
emojiMap[18] = '\u{1F1E7}'
emojiMap[19] = '\u{1F1E8}'
emojiMap[20] = '\u{1F1E9}'
emojiMap[21] = '\u{1F1EA}'
emojiMap[22] = '\u{1F1EB}'
emojiMap[23] = '\u{1F1EC}'
emojiMap[24] = '\u{1F1ED}'
emojiMap[25] = '\u{1F1EE}'
emojiMap[26] = '\u{1F1EF}'
emojiMap[27] = '\u{1F1F0}'
emojiMap[28] = '\u{1F1F1}'
emojiMap[29] = '\u{1F1F2}'
emojiMap[30] = '\u{1F1F3}'
emojiMap[31] = '\u{1F1F4}'
emojiMap[32] = '\u{1F1F5}'
emojiMap[33] = '\u{1F1F6}'
emojiMap[34] = '\u{1F1F7}'
emojiMap[35] = '\u{1F1F8}'
emojiMap[36] = '\u{1F1F9}'
emojiMap[37] = '\u{1F1FA}'
emojiMap[38] = '\u{1F1FB}'
emojiMap[39] = '\u{1F1FC}'
emojiMap[40] = '\u{1F1FD}'
emojiMap[41] = '\u{1F1FE}'
emojiMap[42] = '\u{1F1FF}'
emojiMap[43] = '\u{1F201}'
emojiMap[44] = '\u{1F202}'
emojiMap[45] = '\u{1F21A}'
emojiMap[46] = '\u{1F22F}'
emojiMap[47] = '\u{1F232}'
emojiMap[48] = '\u{1F233}'
emojiMap[49] = '\u{1F234}'
emojiMap[50] = '\u{1F235}'
emojiMap[51] = '\u{1F236}'
emojiMap[52] = '\u{1F237}'
emojiMap[53] = '\u{1F238}'
emojiMap[54] = '\u{1F239}'
emojiMap[55] = '\u{1F23A}'
emojiMap[56] = '\u{1F250}'
emojiMap[57] = '\u{1F251}'
emojiMap[58] = '\u{1F300}'
emojiMap[59] = '\u{1F301}'
emojiMap[60] = '\u{1F302}'
emojiMap[61] = '\u{1F303}'
emojiMap[62] = '\u{1F304}'
emojiMap[63] = '\u{1F305}'
emojiMap[64] = '\u{1F306}'
emojiMap[65] = '\u{1F307}'
emojiMap[66] = '\u{1F308}'
emojiMap[67] = '\u{1F309}'
emojiMap[68] = '\u{1F30A}'
emojiMap[69] = '\u{1F30B}'
emojiMap[70] = '\u{1F30C}'
emojiMap[71] = '\u{1F30D}'
emojiMap[72] = '\u{1F30E}'
emojiMap[73] = '\u{1F30F}'
emojiMap[74] = '\u{1F310}'
emojiMap[75] = '\u{1F311}'
emojiMap[76] = '\u{1F312}'
emojiMap[77] = '\u{1F313}'
emojiMap[78] = '\u{1F314}'
emojiMap[79] = '\u{1F315}'
emojiMap[80] = '\u{1F316}'
emojiMap[81] = '\u{1F317}'
emojiMap[82] = '\u{1F318}'
emojiMap[83] = '\u{1F319}'
emojiMap[84] = '\u{1F31A}'
emojiMap[85] = '\u{1F31B}'
emojiMap[86] = '\u{1F31C}'
emojiMap[87] = '\u{1F31D}'
emojiMap[88] = '\u{1F31E}'
emojiMap[89] = '\u{1F31F}'
emojiMap[90] = '\u{1F320}'
emojiMap[91] = '\u{1F321}'
emojiMap[92] = '\u{1F324}'
emojiMap[93] = '\u{1F325}'
emojiMap[94] = '\u{1F326}'
emojiMap[95] = '\u{1F327}'
emojiMap[96] = '\u{1F328}'
emojiMap[97] = '\u{1F329}'
emojiMap[98] = '\u{1F32A}'
emojiMap[99] = '\u{1F32B}'
emojiMap[100] = '\u{1F32C}'
emojiMap[101] = '\u{1F32D}'
emojiMap[102] = '\u{1F32E}'
emojiMap[103] = '\u{1F32F}'
emojiMap[104] = '\u{1F330}'
emojiMap[105] = '\u{1F331}'
emojiMap[106] = '\u{1F332}'
emojiMap[107] = '\u{1F333}'
emojiMap[108] = '\u{1F334}'
emojiMap[109] = '\u{1F335}'
emojiMap[110] = '\u{1F336}'
emojiMap[111] = '\u{1F337}'
emojiMap[112] = '\u{1F338}'
emojiMap[113] = '\u{1F339}'
emojiMap[114] = '\u{1F33A}'
emojiMap[115] = '\u{1F33B}'
emojiMap[116] = '\u{1F33C}'
emojiMap[117] = '\u{1F33D}'
emojiMap[118] = '\u{1F33E}'
emojiMap[119] = '\u{1F33F}'
emojiMap[120] = '\u{1F340}'
emojiMap[121] = '\u{1F341}'
emojiMap[122] = '\u{1F342}'
emojiMap[123] = '\u{1F343}'
emojiMap[124] = '\u{1F344}'
emojiMap[125] = '\u{1F345}'
emojiMap[126] = '\u{1F346}'
emojiMap[127] = '\u{1F347}'
emojiMap[128] = '\u{1F348}'
emojiMap[129] = '\u{1F349}'
emojiMap[130] = '\u{1F34A}'
emojiMap[131] = '\u{1F34B}'
emojiMap[132] = '\u{1F34C}'
emojiMap[133] = '\u{1F34D}'
emojiMap[134] = '\u{1F34E}'
emojiMap[135] = '\u{1F34F}'
emojiMap[136] = '\u{1F350}'
emojiMap[137] = '\u{1F351}'
emojiMap[138] = '\u{1F352}'
emojiMap[139] = '\u{1F353}'
emojiMap[140] = '\u{1F354}'
emojiMap[141] = '\u{1F355}'
emojiMap[142] = '\u{1F356}'
emojiMap[143] = '\u{1F357}'
emojiMap[144] = '\u{1F358}'
emojiMap[145] = '\u{1F359}'
emojiMap[146] = '\u{1F35A}'
emojiMap[147] = '\u{1F35B}'
emojiMap[148] = '\u{1F35C}'
emojiMap[149] = '\u{1F35D}'
emojiMap[150] = '\u{1F35E}'
emojiMap[151] = '\u{1F35F}'
emojiMap[152] = '\u{1F360}'
emojiMap[153] = '\u{1F361}'
emojiMap[154] = '\u{1F362}'
emojiMap[155] = '\u{1F363}'
emojiMap[156] = '\u{1F364}'
emojiMap[157] = '\u{1F365}'
emojiMap[158] = '\u{1F366}'
emojiMap[159] = '\u{1F367}'
emojiMap[160] = '\u{1F368}'
emojiMap[161] = '\u{1F369}'
emojiMap[162] = '\u{1F36A}'
emojiMap[163] = '\u{1F36B}'
emojiMap[164] = '\u{1F36C}'
emojiMap[165] = '\u{1F36D}'
emojiMap[166] = '\u{1F36E}'
emojiMap[167] = '\u{1F36F}'
emojiMap[168] = '\u{1F370}'
emojiMap[169] = '\u{1F371}'
emojiMap[170] = '\u{1F372}'
emojiMap[171] = '\u{1F373}'
emojiMap[172] = '\u{1F374}'
emojiMap[173] = '\u{1F375}'
emojiMap[174] = '\u{1F376}'
emojiMap[175] = '\u{1F377}'
emojiMap[176] = '\u{1F378}'
emojiMap[177] = '\u{1F379}'
emojiMap[178] = '\u{1F37A}'
emojiMap[179] = '\u{1F37B}'
emojiMap[180] = '\u{1F37C}'
emojiMap[181] = '\u{1F37D}'
emojiMap[182] = '\u{1F37E}'
emojiMap[183] = '\u{1F37F}'
emojiMap[184] = '\u{1F380}'
emojiMap[185] = '\u{1F381}'
emojiMap[186] = '\u{1F382}'
emojiMap[187] = '\u{1F383}'
emojiMap[188] = '\u{1F384}'
emojiMap[189] = '\u{1F385}'
emojiMap[190] = '\u{1F386}'
emojiMap[191] = '\u{1F387}'
emojiMap[192] = '\u{1F388}'
emojiMap[193] = '\u{1F389}'
emojiMap[194] = '\u{1F38A}'
emojiMap[195] = '\u{1F38B}'
emojiMap[196] = '\u{1F38C}'
emojiMap[197] = '\u{1F38D}'
emojiMap[198] = '\u{1F38E}'
emojiMap[199] = '\u{1F38F}'
emojiMap[200] = '\u{1F390}'
emojiMap[201] = '\u{1F391}'
emojiMap[202] = '\u{1F392}'
emojiMap[203] = '\u{1F393}'
emojiMap[204] = '\u{1F396}'
emojiMap[205] = '\u{1F397}'
emojiMap[206] = '\u{1F399}'
emojiMap[207] = '\u{1F39A}'
emojiMap[208] = '\u{1F39B}'
emojiMap[209] = '\u{1F39E}'
emojiMap[210] = '\u{1F39F}'
emojiMap[211] = '\u{1F3A0}'
emojiMap[212] = '\u{1F3A1}'
emojiMap[213] = '\u{1F3A2}'
emojiMap[214] = '\u{1F3A3}'
emojiMap[215] = '\u{1F3A4}'
emojiMap[216] = '\u{1F3A5}'
emojiMap[217] = '\u{1F3A6}'
emojiMap[218] = '\u{1F3A7}'
emojiMap[219] = '\u{1F3A8}'
emojiMap[220] = '\u{1F3A9}'
emojiMap[221] = '\u{1F3AA}'
emojiMap[222] = '\u{1F3AB}'
emojiMap[223] = '\u{1F3AC}'
emojiMap[224] = '\u{1F3AD}'
emojiMap[225] = '\u{1F3AE}'
emojiMap[226] = '\u{1F3AF}'
emojiMap[227] = '\u{1F3B0}'
emojiMap[228] = '\u{1F3B1}'
emojiMap[229] = '\u{1F3B2}'
emojiMap[230] = '\u{1F3B3}'
emojiMap[231] = '\u{1F3B4}'
emojiMap[232] = '\u{1F3B5}'
emojiMap[233] = '\u{1F3B6}'
emojiMap[234] = '\u{1F3B7}'
emojiMap[235] = '\u{1F3B8}'
emojiMap[236] = '\u{1F3B9}'
emojiMap[237] = '\u{1F3BA}'
emojiMap[238] = '\u{1F3BB}'
emojiMap[239] = '\u{1F3BC}'
emojiMap[240] = '\u{1F3BD}'
emojiMap[241] = '\u{1F3BE}'
emojiMap[242] = '\u{1F3BF}'
emojiMap[243] = '\u{1F3C0}'
emojiMap[244] = '\u{1F3C1}'
emojiMap[245] = '\u{1F3C2}'
emojiMap[246] = '\u{1F3C3}'
emojiMap[247] = '\u{1F3C4}'
emojiMap[248] = '\u{1F3C5}'
emojiMap[249] = '\u{1F3C6}'
emojiMap[250] = '\u{1F3C7}'
emojiMap[251] = '\u{1F3C8}'
emojiMap[252] = '\u{1F3C9}'
emojiMap[253] = '\u{1F3CA}'
emojiMap[254] = '\u{1F3CB}'
emojiMap[255] = '\u{1F3CC}'
emojiMap[256] = '\u{1F3CE}'
emojiMap[257] = '\u{1F3CF}'
emojiMap[258] = '\u{1F3D0}'
emojiMap[259] = '\u{1F3D1}'
emojiMap[260] = '\u{1F3D2}'
emojiMap[261] = '\u{1F3D3}'
emojiMap[262] = '\u{1F3D4}'
emojiMap[263] = '\u{1F3D5}'
emojiMap[264] = '\u{1F3D6}'
emojiMap[265] = '\u{1F3D7}'
emojiMap[266] = '\u{1F3D8}'
emojiMap[267] = '\u{1F3D9}'
emojiMap[268] = '\u{1F3DA}'
emojiMap[269] = '\u{1F3DB}'
emojiMap[270] = '\u{1F3DC}'
emojiMap[271] = '\u{1F3DD}'
emojiMap[272] = '\u{1F3DE}'
emojiMap[273] = '\u{1F3DF}'
emojiMap[274] = '\u{1F3E0}'
emojiMap[275] = '\u{1F3E1}'
emojiMap[276] = '\u{1F3E2}'
emojiMap[277] = '\u{1F3E3}'
emojiMap[278] = '\u{1F3E4}'
emojiMap[279] = '\u{1F3E5}'
emojiMap[280] = '\u{1F3E6}'
emojiMap[281] = '\u{1F3E7}'
emojiMap[282] = '\u{1F3E8}'
emojiMap[283] = '\u{1F3E9}'
emojiMap[284] = '\u{1F3EA}'
emojiMap[285] = '\u{1F3EB}'
emojiMap[286] = '\u{1F3EC}'
emojiMap[287] = '\u{1F3ED}'
emojiMap[288] = '\u{1F3EE}'
emojiMap[289] = '\u{1F3EF}'
emojiMap[290] = '\u{1F3F0}'
emojiMap[291] = '\u{1F3F3}'
emojiMap[292] = '\u{1F3F4}'
emojiMap[293] = '\u{1F3F5}'
emojiMap[294] = '\u{1F3F7}'
emojiMap[295] = '\u{1F3F8}'
emojiMap[296] = '\u{1F3F9}'
emojiMap[297] = '\u{1F3FA}'
emojiMap[298] = '\u{1F3FB}'
emojiMap[299] = '\u{1F3FC}'
emojiMap[300] = '\u{1F3FD}'
emojiMap[301] = '\u{1F3FE}'
emojiMap[302] = '\u{1F3FF}'
emojiMap[303] = '\u{1F400}'
emojiMap[304] = '\u{1F401}'
emojiMap[305] = '\u{1F402}'
emojiMap[306] = '\u{1F403}'
emojiMap[307] = '\u{1F404}'
emojiMap[308] = '\u{1F405}'
emojiMap[309] = '\u{1F406}'
emojiMap[310] = '\u{1F407}'
emojiMap[311] = '\u{1F408}'
emojiMap[312] = '\u{1F409}'
emojiMap[313] = '\u{1F40A}'
emojiMap[314] = '\u{1F40B}'
emojiMap[315] = '\u{1F40C}'
emojiMap[316] = '\u{1F40D}'
emojiMap[317] = '\u{1F40E}'
emojiMap[318] = '\u{1F40F}'
emojiMap[319] = '\u{1F410}'
emojiMap[320] = '\u{1F411}'
emojiMap[321] = '\u{1F412}'
emojiMap[322] = '\u{1F413}'
emojiMap[323] = '\u{1F414}'
emojiMap[324] = '\u{1F415}'
emojiMap[325] = '\u{1F416}'
emojiMap[326] = '\u{1F417}'
emojiMap[327] = '\u{1F418}'
emojiMap[328] = '\u{1F419}'
emojiMap[329] = '\u{1F41A}'
emojiMap[330] = '\u{1F41B}'
emojiMap[331] = '\u{1F41C}'
emojiMap[332] = '\u{1F41D}'
emojiMap[333] = '\u{1F41E}'
emojiMap[334] = '\u{1F41F}'
emojiMap[335] = '\u{1F420}'
emojiMap[336] = '\u{1F421}'
emojiMap[337] = '\u{1F422}'
emojiMap[338] = '\u{1F423}'
emojiMap[339] = '\u{1F424}'
emojiMap[340] = '\u{1F425}'
emojiMap[341] = '\u{1F426}'
emojiMap[342] = '\u{1F427}'
emojiMap[343] = '\u{1F428}'
emojiMap[344] = '\u{1F429}'
emojiMap[345] = '\u{1F42A}'
emojiMap[346] = '\u{1F42B}'
emojiMap[347] = '\u{1F42C}'
emojiMap[348] = '\u{1F42D}'
emojiMap[349] = '\u{1F42E}'
emojiMap[350] = '\u{1F42F}'
emojiMap[351] = '\u{1F430}'
emojiMap[352] = '\u{1F431}'
emojiMap[353] = '\u{1F432}'
emojiMap[354] = '\u{1F433}'
emojiMap[355] = '\u{1F434}'
emojiMap[356] = '\u{1F435}'
emojiMap[357] = '\u{1F436}'
emojiMap[358] = '\u{1F437}'
emojiMap[359] = '\u{1F438}'
emojiMap[360] = '\u{1F439}'
emojiMap[361] = '\u{1F43A}'
emojiMap[362] = '\u{1F43B}'
emojiMap[363] = '\u{1F43C}'
emojiMap[364] = '\u{1F43D}'
emojiMap[365] = '\u{1F43E}'
emojiMap[366] = '\u{1F43F}'
emojiMap[367] = '\u{1F440}'
emojiMap[368] = '\u{1F441}'
emojiMap[369] = '\u{1F442}'
emojiMap[370] = '\u{1F443}'
emojiMap[371] = '\u{1F444}'
emojiMap[372] = '\u{1F445}'
emojiMap[373] = '\u{1F446}'
emojiMap[374] = '\u{1F447}'
emojiMap[375] = '\u{1F448}'
emojiMap[376] = '\u{1F449}'
emojiMap[377] = '\u{1F44A}'
emojiMap[378] = '\u{1F44B}'
emojiMap[379] = '\u{1F44C}'
emojiMap[380] = '\u{1F44D}'
emojiMap[381] = '\u{1F44E}'
emojiMap[382] = '\u{1F44F}'
emojiMap[383] = '\u{1F450}'
emojiMap[384] = '\u{1F451}'
emojiMap[385] = '\u{1F452}'
emojiMap[386] = '\u{1F453}'
emojiMap[387] = '\u{1F454}'
emojiMap[388] = '\u{1F455}'
emojiMap[389] = '\u{1F456}'
emojiMap[390] = '\u{1F457}'
emojiMap[391] = '\u{1F458}'
emojiMap[392] = '\u{1F459}'
emojiMap[393] = '\u{1F45A}'
emojiMap[394] = '\u{1F45B}'
emojiMap[395] = '\u{1F45C}'
emojiMap[396] = '\u{1F45D}'
emojiMap[397] = '\u{1F45E}'
emojiMap[398] = '\u{1F45F}'
emojiMap[399] = '\u{1F460}'
emojiMap[400] = '\u{1F461}'
emojiMap[401] = '\u{1F462}'
emojiMap[402] = '\u{1F463}'
emojiMap[403] = '\u{1F464}'
emojiMap[404] = '\u{1F465}'
emojiMap[405] = '\u{1F466}'
emojiMap[406] = '\u{1F467}'
emojiMap[407] = '\u{1F468}'
emojiMap[408] = '\u{1F469}'
emojiMap[409] = '\u{1F46A}'
emojiMap[410] = '\u{1F46B}'
emojiMap[411] = '\u{1F46C}'
emojiMap[412] = '\u{1F46D}'
emojiMap[413] = '\u{1F46E}'
emojiMap[414] = '\u{1F46F}'
emojiMap[415] = '\u{1F470}'
emojiMap[416] = '\u{1F471}'
emojiMap[417] = '\u{1F472}'
emojiMap[418] = '\u{1F473}'
emojiMap[419] = '\u{1F474}'
emojiMap[420] = '\u{1F475}'
emojiMap[421] = '\u{1F476}'
emojiMap[422] = '\u{1F477}'
emojiMap[423] = '\u{1F478}'
emojiMap[424] = '\u{1F479}'
emojiMap[425] = '\u{1F47A}'
emojiMap[426] = '\u{1F47B}'
emojiMap[427] = '\u{1F47C}'
emojiMap[428] = '\u{1F47D}'
emojiMap[429] = '\u{1F47E}'
emojiMap[430] = '\u{1F47F}'
emojiMap[431] = '\u{1F480}'
emojiMap[432] = '\u{1F481}'
emojiMap[433] = '\u{1F482}'
emojiMap[434] = '\u{1F483}'
emojiMap[435] = '\u{1F484}'
emojiMap[436] = '\u{1F485}'
emojiMap[437] = '\u{1F486}'
emojiMap[438] = '\u{1F487}'
emojiMap[439] = '\u{1F488}'
emojiMap[440] = '\u{1F489}'
emojiMap[441] = '\u{1F48A}'
emojiMap[442] = '\u{1F48B}'
emojiMap[443] = '\u{1F48C}'
emojiMap[444] = '\u{1F48D}'
emojiMap[445] = '\u{1F48E}'
emojiMap[446] = '\u{1F48F}'
emojiMap[447] = '\u{1F490}'
emojiMap[448] = '\u{1F491}'
emojiMap[449] = '\u{1F492}'
emojiMap[450] = '\u{1F493}'
emojiMap[451] = '\u{1F494}'
emojiMap[452] = '\u{1F495}'
emojiMap[453] = '\u{1F496}'
emojiMap[454] = '\u{1F497}'
emojiMap[455] = '\u{1F498}'
emojiMap[456] = '\u{1F499}'
emojiMap[457] = '\u{1F49A}'
emojiMap[458] = '\u{1F49B}'
emojiMap[459] = '\u{1F49C}'
emojiMap[460] = '\u{1F49D}'
emojiMap[461] = '\u{1F49E}'
emojiMap[462] = '\u{1F49F}'
emojiMap[463] = '\u{1F4A0}'
emojiMap[464] = '\u{1F4A1}'
emojiMap[465] = '\u{1F4A2}'
emojiMap[466] = '\u{1F4A3}'
emojiMap[467] = '\u{1F4A4}'
emojiMap[468] = '\u{1F4A5}'
emojiMap[469] = '\u{1F4A6}'
emojiMap[470] = '\u{1F4A7}'
emojiMap[471] = '\u{1F4A8}'
emojiMap[472] = '\u{1F4A9}'
emojiMap[473] = '\u{1F4AA}'
emojiMap[474] = '\u{1F4AB}'
emojiMap[475] = '\u{1F4AC}'
emojiMap[476] = '\u{1F4AD}'
emojiMap[477] = '\u{1F4AE}'
emojiMap[478] = '\u{1F4AF}'
emojiMap[479] = '\u{1F4B0}'
emojiMap[480] = '\u{1F4B1}'
emojiMap[481] = '\u{1F4B2}'
emojiMap[482] = '\u{1F4B3}'
emojiMap[483] = '\u{1F4B4}'
emojiMap[484] = '\u{1F4B5}'
emojiMap[485] = '\u{1F4B6}'
emojiMap[486] = '\u{1F4B7}'
emojiMap[487] = '\u{1F4B8}'
emojiMap[488] = '\u{1F4B9}'
emojiMap[489] = '\u{1F4BA}'
emojiMap[490] = '\u{1F4BB}'
emojiMap[491] = '\u{1F4BC}'
emojiMap[492] = '\u{1F4BD}'
emojiMap[493] = '\u{1F4BE}'
emojiMap[494] = '\u{1F4BF}'
emojiMap[495] = '\u{1F4C0}'
emojiMap[496] = '\u{1F4C1}'
emojiMap[497] = '\u{1F4C2}'
emojiMap[498] = '\u{1F4C3}'
emojiMap[499] = '\u{1F4C4}'
emojiMap[500] = '\u{1F4C5}'
emojiMap[501] = '\u{1F4C6}'
emojiMap[502] = '\u{1F4C7}'
emojiMap[503] = '\u{1F4C8}'
emojiMap[504] = '\u{1F4C9}'
emojiMap[505] = '\u{1F4CA}'
emojiMap[506] = '\u{1F4CB}'
emojiMap[507] = '\u{1F4CC}'
emojiMap[508] = '\u{1F4CD}'
emojiMap[509] = '\u{1F4CE}'
emojiMap[510] = '\u{1F4CF}'
emojiMap[511] = '\u{1F4D0}'
emojiMap[512] = '\u{1F4D2}'
emojiMap[513] = '\u{1F4D3}'
emojiMap[514] = '\u{1F4D4}'
emojiMap[515] = '\u{1F4D5}'
emojiMap[516] = '\u{1F4D6}'
emojiMap[517] = '\u{1F4D7}'
emojiMap[518] = '\u{1F4D8}'
emojiMap[519] = '\u{1F4D9}'
emojiMap[520] = '\u{1F4DA}'
emojiMap[521] = '\u{1F4DB}'
emojiMap[522] = '\u{1F4DC}'
emojiMap[523] = '\u{1F4DD}'
emojiMap[524] = '\u{1F4DE}'
emojiMap[525] = '\u{1F4DF}'
emojiMap[526] = '\u{1F4E0}'
emojiMap[527] = '\u{1F4E1}'
emojiMap[528] = '\u{1F4E2}'
emojiMap[529] = '\u{1F4E3}'
emojiMap[530] = '\u{1F4E4}'
emojiMap[531] = '\u{1F4E5}'
emojiMap[532] = '\u{1F4E6}'
emojiMap[533] = '\u{1F4E7}'
emojiMap[534] = '\u{1F4E8}'
emojiMap[535] = '\u{1F4E9}'
emojiMap[536] = '\u{1F4EA}'
emojiMap[537] = '\u{1F4EB}'
emojiMap[538] = '\u{1F4EC}'
emojiMap[539] = '\u{1F4ED}'
emojiMap[540] = '\u{1F4EE}'
emojiMap[541] = '\u{1F4EF}'
emojiMap[542] = '\u{1F4F0}'
emojiMap[543] = '\u{1F4F1}'
emojiMap[544] = '\u{1F4F2}'
emojiMap[545] = '\u{1F4F3}'
emojiMap[546] = '\u{1F4F4}'
emojiMap[547] = '\u{1F4F5}'
emojiMap[548] = '\u{1F4F6}'
emojiMap[549] = '\u{1F4F7}'
emojiMap[550] = '\u{1F4F8}'
emojiMap[551] = '\u{1F4F9}'
emojiMap[552] = '\u{1F4FA}'
emojiMap[553] = '\u{1F4FB}'
emojiMap[554] = '\u{1F4FC}'
emojiMap[555] = '\u{1F4FD}'
emojiMap[556] = '\u{1F4FF}'
emojiMap[557] = '\u{1F500}'
emojiMap[558] = '\u{1F501}'
emojiMap[559] = '\u{1F502}'
emojiMap[560] = '\u{1F503}'
emojiMap[561] = '\u{1F504}'
emojiMap[562] = '\u{1F505}'
emojiMap[563] = '\u{1F506}'
emojiMap[564] = '\u{1F507}'
emojiMap[565] = '\u{1F508}'
emojiMap[566] = '\u{1F509}'
emojiMap[567] = '\u{1F50A}'
emojiMap[568] = '\u{1F50B}'
emojiMap[569] = '\u{1F50C}'
emojiMap[570] = '\u{1F50D}'
emojiMap[571] = '\u{1F50E}'
emojiMap[572] = '\u{1F50F}'
emojiMap[573] = '\u{1F510}'
emojiMap[574] = '\u{1F511}'
emojiMap[575] = '\u{1F512}'
emojiMap[576] = '\u{1F513}'
emojiMap[577] = '\u{1F514}'
emojiMap[578] = '\u{1F515}'
emojiMap[579] = '\u{1F516}'
emojiMap[580] = '\u{1F517}'
emojiMap[581] = '\u{1F518}'
emojiMap[582] = '\u{1F519}'
emojiMap[583] = '\u{1F51A}'
emojiMap[584] = '\u{1F51B}'
emojiMap[585] = '\u{1F51C}'
emojiMap[586] = '\u{1F51D}'
emojiMap[587] = '\u{1F51E}'
emojiMap[588] = '\u{1F51F}'
emojiMap[589] = '\u{1F520}'
emojiMap[590] = '\u{1F521}'
emojiMap[591] = '\u{1F522}'
emojiMap[592] = '\u{1F523}'
emojiMap[593] = '\u{1F524}'
emojiMap[594] = '\u{1F525}'
emojiMap[595] = '\u{1F526}'
emojiMap[596] = '\u{1F527}'
emojiMap[597] = '\u{1F528}'
emojiMap[598] = '\u{1F529}'
emojiMap[599] = '\u{1F52A}'
emojiMap[600] = '\u{1F52B}'
emojiMap[601] = '\u{1F52C}'
emojiMap[602] = '\u{1F52D}'
emojiMap[603] = '\u{1F52E}'
emojiMap[604] = '\u{1F52F}'
emojiMap[605] = '\u{1F530}'
emojiMap[606] = '\u{1F531}'
emojiMap[607] = '\u{1F532}'
emojiMap[608] = '\u{1F533}'
emojiMap[609] = '\u{1F534}'
emojiMap[610] = '\u{1F535}'
emojiMap[611] = '\u{1F536}'
emojiMap[612] = '\u{1F537}'
emojiMap[613] = '\u{1F538}'
emojiMap[614] = '\u{1F539}'
emojiMap[615] = '\u{1F53A}'
emojiMap[616] = '\u{1F53B}'
emojiMap[617] = '\u{1F53C}'
emojiMap[618] = '\u{1F53D}'
emojiMap[619] = '\u{1F549}'
emojiMap[620] = '\u{1F54A}'
emojiMap[621] = '\u{1F54B}'
emojiMap[622] = '\u{1F54C}'
emojiMap[623] = '\u{1F54D}'
emojiMap[624] = '\u{1F54E}'
emojiMap[625] = '\u{1F550}'
emojiMap[626] = '\u{1F551}'
emojiMap[627] = '\u{1F552}'
emojiMap[628] = '\u{1F553}'
emojiMap[629] = '\u{1F554}'
emojiMap[630] = '\u{1F555}'
emojiMap[631] = '\u{1F556}'
emojiMap[632] = '\u{1F557}'
emojiMap[633] = '\u{1F558}'
emojiMap[634] = '\u{1F559}'
emojiMap[635] = '\u{1F55A}'
emojiMap[636] = '\u{1F55B}'
emojiMap[637] = '\u{1F55C}'
emojiMap[638] = '\u{1F55D}'
emojiMap[639] = '\u{1F55E}'
emojiMap[640] = '\u{1F55F}'
emojiMap[641] = '\u{1F560}'
emojiMap[642] = '\u{1F561}'
emojiMap[643] = '\u{1F562}'
emojiMap[644] = '\u{1F563}'
emojiMap[645] = '\u{1F564}'
emojiMap[646] = '\u{1F565}'
emojiMap[647] = '\u{1F566}'
emojiMap[648] = '\u{1F567}'
emojiMap[649] = '\u{1F56F}'
emojiMap[650] = '\u{1F570}'
emojiMap[651] = '\u{1F573}'
emojiMap[652] = '\u{1F574}'
emojiMap[653] = '\u{1F575}'
emojiMap[654] = '\u{1F576}'
emojiMap[655] = '\u{1F577}'
emojiMap[656] = '\u{1F578}'
emojiMap[657] = '\u{1F579}'
emojiMap[658] = '\u{1F57A}'
emojiMap[659] = '\u{1F587}'
emojiMap[660] = '\u{1F58A}'
emojiMap[661] = '\u{1F58B}'
emojiMap[662] = '\u{1F58C}'
emojiMap[663] = '\u{1F58D}'
emojiMap[664] = '\u{1F590}'
emojiMap[665] = '\u{1F595}'
emojiMap[666] = '\u{1F596}'
emojiMap[667] = '\u{1F5A4}'
emojiMap[668] = '\u{1F5A5}'
emojiMap[669] = '\u{1F5A8}'
emojiMap[670] = '\u{1F5B1}'
emojiMap[671] = '\u{1F5B2}'
emojiMap[672] = '\u{1F5BC}'
emojiMap[673] = '\u{1F5C2}'
emojiMap[674] = '\u{1F5C3}'
emojiMap[675] = '\u{1F5C4}'
emojiMap[676] = '\u{1F5D1}'
emojiMap[677] = '\u{1F5D2}'
emojiMap[678] = '\u{1F5D3}'
emojiMap[679] = '\u{1F5DC}'
emojiMap[680] = '\u{1F5DD}'
emojiMap[681] = '\u{1F5DE}'
emojiMap[682] = '\u{1F5E1}'
emojiMap[683] = '\u{1F5E3}'
emojiMap[684] = '\u{1F5E8}'
emojiMap[685] = '\u{1F5EF}'
emojiMap[686] = '\u{1F5F3}'
emojiMap[687] = '\u{1F5FA}'
emojiMap[688] = '\u{1F5FB}'
emojiMap[689] = '\u{1F5FC}'
emojiMap[690] = '\u{1F5FD}'
emojiMap[691] = '\u{1F5FE}'
emojiMap[692] = '\u{1F5FF}'
emojiMap[693] = '\u{1F600}'
emojiMap[694] = '\u{1F601}'
emojiMap[695] = '\u{1F602}'
emojiMap[696] = '\u{1F603}'
emojiMap[697] = '\u{1F604}'
emojiMap[698] = '\u{1F605}'
emojiMap[699] = '\u{1F606}'
emojiMap[700] = '\u{1F607}'
emojiMap[701] = '\u{1F608}'
emojiMap[702] = '\u{1F609}'
emojiMap[703] = '\u{1F60A}'
emojiMap[704] = '\u{1F60B}'
emojiMap[705] = '\u{1F60C}'
emojiMap[706] = '\u{1F60D}'
emojiMap[707] = '\u{1F60E}'
emojiMap[708] = '\u{1F60F}'
emojiMap[709] = '\u{1F610}'
emojiMap[710] = '\u{1F611}'
emojiMap[711] = '\u{1F612}'
emojiMap[712] = '\u{1F613}'
emojiMap[713] = '\u{1F614}'
emojiMap[714] = '\u{1F615}'
emojiMap[715] = '\u{1F616}'
emojiMap[716] = '\u{1F617}'
emojiMap[717] = '\u{1F618}'
emojiMap[718] = '\u{1F619}'
emojiMap[719] = '\u{1F61A}'
emojiMap[720] = '\u{1F61B}'
emojiMap[721] = '\u{1F61C}'
emojiMap[722] = '\u{1F61D}'
emojiMap[723] = '\u{1F61E}'
emojiMap[724] = '\u{1F61F}'
emojiMap[725] = '\u{1F620}'
emojiMap[726] = '\u{1F621}'
emojiMap[727] = '\u{1F622}'
emojiMap[728] = '\u{1F623}'
emojiMap[729] = '\u{1F624}'
emojiMap[730] = '\u{1F625}'
emojiMap[731] = '\u{1F626}'
emojiMap[732] = '\u{1F627}'
emojiMap[733] = '\u{1F628}'
emojiMap[734] = '\u{1F629}'
emojiMap[735] = '\u{1F62A}'
emojiMap[736] = '\u{1F62B}'
emojiMap[737] = '\u{1F62C}'
emojiMap[738] = '\u{1F62D}'
emojiMap[739] = '\u{1F62E}'
emojiMap[740] = '\u{1F62F}'
emojiMap[741] = '\u{1F630}'
emojiMap[742] = '\u{1F631}'
emojiMap[743] = '\u{1F632}'
emojiMap[744] = '\u{1F633}'
emojiMap[745] = '\u{1F634}'
emojiMap[746] = '\u{1F635}'
emojiMap[747] = '\u{1F636}'
emojiMap[748] = '\u{1F637}'
emojiMap[749] = '\u{1F638}'
emojiMap[750] = '\u{1F639}'
emojiMap[751] = '\u{1F63A}'
emojiMap[752] = '\u{1F63B}'
emojiMap[753] = '\u{1F63C}'
emojiMap[754] = '\u{1F63D}'
emojiMap[755] = '\u{1F63E}'
emojiMap[756] = '\u{1F63F}'
emojiMap[757] = '\u{1F640}'
emojiMap[758] = '\u{1F641}'
emojiMap[759] = '\u{1F642}'
emojiMap[760] = '\u{1F643}'
emojiMap[761] = '\u{1F644}'
emojiMap[762] = '\u{1F645}'
emojiMap[763] = '\u{1F646}'
emojiMap[764] = '\u{1F647}'
emojiMap[765] = '\u{1F648}'
emojiMap[766] = '\u{1F649}'
emojiMap[767] = '\u{1F64A}'
emojiMap[768] = '\u{1F64C}'
emojiMap[769] = '\u{1F64D}'
emojiMap[770] = '\u{1F64E}'
emojiMap[771] = '\u{1F64F}'
emojiMap[772] = '\u{1F680}'
emojiMap[773] = '\u{1F681}'
emojiMap[774] = '\u{1F682}'
emojiMap[775] = '\u{1F683}'
emojiMap[776] = '\u{1F684}'
emojiMap[777] = '\u{1F685}'
emojiMap[778] = '\u{1F686}'
emojiMap[779] = '\u{1F687}'
emojiMap[780] = '\u{1F688}'
emojiMap[781] = '\u{1F689}'
emojiMap[782] = '\u{1F68A}'
emojiMap[783] = '\u{1F68B}'
emojiMap[784] = '\u{1F68C}'
emojiMap[785] = '\u{1F68D}'
emojiMap[786] = '\u{1F68E}'
emojiMap[787] = '\u{1F68F}'
emojiMap[788] = '\u{1F690}'
emojiMap[789] = '\u{1F691}'
emojiMap[790] = '\u{1F692}'
emojiMap[791] = '\u{1F693}'
emojiMap[792] = '\u{1F694}'
emojiMap[793] = '\u{1F695}'
emojiMap[794] = '\u{1F696}'
emojiMap[795] = '\u{1F697}'
emojiMap[796] = '\u{1F698}'
emojiMap[797] = '\u{1F699}'
emojiMap[798] = '\u{1F69A}'
emojiMap[799] = '\u{1F69B}'
emojiMap[800] = '\u{1F69C}'
emojiMap[801] = '\u{1F69D}'
emojiMap[802] = '\u{1F69E}'
emojiMap[803] = '\u{1F69F}'
emojiMap[804] = '\u{1F6A0}'
emojiMap[805] = '\u{1F6A1}'
emojiMap[806] = '\u{1F6A2}'
emojiMap[807] = '\u{1F6A3}'
emojiMap[808] = '\u{1F6A4}'
emojiMap[809] = '\u{1F6A5}'
emojiMap[810] = '\u{1F6A6}'
emojiMap[811] = '\u{1F6A7}'
emojiMap[812] = '\u{1F6A8}'
emojiMap[813] = '\u{1F6A9}'
emojiMap[814] = '\u{1F6AA}'
emojiMap[815] = '\u{1F6AB}'
emojiMap[816] = '\u{1F6AC}'
emojiMap[817] = '\u{1F6AD}'
emojiMap[818] = '\u{1F6AE}'
emojiMap[819] = '\u{1F6AF}'
emojiMap[820] = '\u{1F6B0}'
emojiMap[821] = '\u{1F6B1}'
emojiMap[822] = '\u{1F6B2}'
emojiMap[823] = '\u{1F6B3}'
emojiMap[824] = '\u{1F6B4}'
emojiMap[825] = '\u{1F6B5}'
emojiMap[826] = '\u{1F6B6}'
emojiMap[827] = '\u{1F6B7}'
emojiMap[828] = '\u{1F6B8}'
emojiMap[829] = '\u{1F6B9}'
emojiMap[830] = '\u{1F6BA}'
emojiMap[831] = '\u{1F6BB}'
emojiMap[832] = '\u{1F6BC}'
emojiMap[833] = '\u{1F6BD}'
emojiMap[834] = '\u{1F6BE}'
emojiMap[835] = '\u{1F6BF}'
emojiMap[836] = '\u{1F6C0}'
emojiMap[837] = '\u{1F6C1}'
emojiMap[838] = '\u{1F6C2}'
emojiMap[839] = '\u{1F6C3}'
emojiMap[840] = '\u{1F6C4}'
emojiMap[841] = '\u{1F6C5}'
emojiMap[842] = '\u{1F6CB}'
emojiMap[843] = '\u{1F6CC}'
emojiMap[844] = '\u{1F6CD}'
emojiMap[845] = '\u{1F6CE}'
emojiMap[846] = '\u{1F6CF}'
emojiMap[847] = '\u{1F6D0}'
emojiMap[848] = '\u{1F6D1}'
emojiMap[849] = '\u{1F6D2}'
emojiMap[850] = '\u{1F6E0}'
emojiMap[851] = '\u{1F6E1}'
emojiMap[852] = '\u{1F6E2}'
emojiMap[853] = '\u{1F6E3}'
emojiMap[854] = '\u{1F6E4}'
emojiMap[855] = '\u{1F6E5}'
emojiMap[856] = '\u{1F6E9}'
emojiMap[857] = '\u{1F6EB}'
emojiMap[858] = '\u{1F6EC}'
emojiMap[859] = '\u{1F6F0}'
emojiMap[860] = '\u{1F6F3}'
emojiMap[861] = '\u{1F6F4}'
emojiMap[862] = '\u{1F6F5}'
emojiMap[863] = '\u{1F6F6}'
emojiMap[864] = '\u{1F6F7}'
emojiMap[865] = '\u{1F6F8}'
emojiMap[866] = '\u{1F6F9}'
emojiMap[867] = '\u{1F910}'
emojiMap[868] = '\u{1F911}'
emojiMap[869] = '\u{1F912}'
emojiMap[870] = '\u{1F913}'
emojiMap[871] = '\u{1F914}'
emojiMap[872] = '\u{1F915}'
emojiMap[873] = '\u{1F916}'
emojiMap[874] = '\u{1F917}'
emojiMap[875] = '\u{1F918}'
emojiMap[876] = '\u{1F919}'
emojiMap[877] = '\u{1F91A}'
emojiMap[878] = '\u{1F91B}'
emojiMap[879] = '\u{1F91C}'
emojiMap[880] = '\u{1F91D}'
emojiMap[881] = '\u{1F91E}'
emojiMap[882] = '\u{1F91F}'
emojiMap[883] = '\u{1F920}'
emojiMap[884] = '\u{1F921}'
emojiMap[885] = '\u{1F922}'
emojiMap[886] = '\u{1F923}'
emojiMap[887] = '\u{1F924}'
emojiMap[888] = '\u{1F925}'
emojiMap[889] = '\u{1F926}'
emojiMap[890] = '\u{1F927}'
emojiMap[891] = '\u{1F928}'
emojiMap[892] = '\u{1F929}'
emojiMap[893] = '\u{1F92A}'
emojiMap[894] = '\u{1F92B}'
emojiMap[895] = '\u{1F92C}'
emojiMap[896] = '\u{1F92D}'
emojiMap[897] = '\u{1F92E}'
emojiMap[898] = '\u{1F92F}'
emojiMap[899] = '\u{1F930}'
emojiMap[900] = '\u{1F931}'
emojiMap[901] = '\u{1F932}'
emojiMap[902] = '\u{1F933}'
emojiMap[903] = '\u{1F934}'
emojiMap[904] = '\u{1F935}'
emojiMap[905] = '\u{1F936}'
emojiMap[906] = '\u{1F937}'
emojiMap[907] = '\u{1F938}'
emojiMap[908] = '\u{1F939}'
emojiMap[909] = '\u{1F93A}'
emojiMap[910] = '\u{1F93C}'
emojiMap[911] = '\u{1F93D}'
emojiMap[912] = '\u{1F93E}'
emojiMap[913] = '\u{1F940}'
emojiMap[914] = '\u{1F941}'
emojiMap[915] = '\u{1F942}'
emojiMap[916] = '\u{1F943}'
emojiMap[917] = '\u{1F944}'
emojiMap[918] = '\u{1F945}'
emojiMap[919] = '\u{1F947}'
emojiMap[920] = '\u{1F948}'
emojiMap[921] = '\u{1F949}'
emojiMap[922] = '\u{1F94A}'
emojiMap[923] = '\u{1F94B}'
emojiMap[924] = '\u{1F94C}'
emojiMap[925] = '\u{1F94D}'
emojiMap[926] = '\u{1F94E}'
emojiMap[927] = '\u{1F94F}'
emojiMap[928] = '\u{1F950}'
emojiMap[929] = '\u{1F951}'
emojiMap[930] = '\u{1F952}'
emojiMap[931] = '\u{1F953}'
emojiMap[932] = '\u{1F954}'
emojiMap[933] = '\u{1F955}'
emojiMap[934] = '\u{1F956}'
emojiMap[935] = '\u{1F957}'
emojiMap[936] = '\u{1F958}'
emojiMap[937] = '\u{1F959}'
emojiMap[938] = '\u{1F95A}'
emojiMap[939] = '\u{1F95B}'
emojiMap[940] = '\u{1F95C}'
emojiMap[941] = '\u{1F95D}'
emojiMap[942] = '\u{1F95E}'
emojiMap[943] = '\u{1F95F}'
emojiMap[944] = '\u{1F960}'
emojiMap[945] = '\u{1F961}'
emojiMap[946] = '\u{1F962}'
emojiMap[947] = '\u{1F963}'
emojiMap[948] = '\u{1F964}'
emojiMap[949] = '\u{1F965}'
emojiMap[950] = '\u{1F966}'
emojiMap[951] = '\u{1F967}'
emojiMap[952] = '\u{1F968}'
emojiMap[953] = '\u{1F969}'
emojiMap[954] = '\u{1F96A}'
emojiMap[955] = '\u{1F96B}'
emojiMap[956] = '\u{1F96C}'
emojiMap[957] = '\u{1F96D}'
emojiMap[958] = '\u{1F96E}'
emojiMap[959] = '\u{1F96F}'
emojiMap[960] = '\u{1F970}'
emojiMap[961] = '\u{1F973}'
emojiMap[962] = '\u{1F974}'
emojiMap[963] = '\u{1F975}'
emojiMap[964] = '\u{1F976}'
emojiMap[965] = '\u{1F97A}'
emojiMap[966] = '\u{1F97C}'
emojiMap[967] = '\u{1F97D}'
emojiMap[968] = '\u{1F97E}'
emojiMap[969] = '\u{1F97F}'
emojiMap[970] = '\u{1F980}'
emojiMap[971] = '\u{1F981}'
emojiMap[972] = '\u{1F982}'
emojiMap[973] = '\u{1F983}'
emojiMap[974] = '\u{1F984}'
emojiMap[975] = '\u{1F985}'
emojiMap[976] = '\u{1F986}'
emojiMap[977] = '\u{1F987}'
emojiMap[978] = '\u{1F988}'
emojiMap[979] = '\u{1F989}'
emojiMap[980] = '\u{1F98A}'
emojiMap[981] = '\u{1F98B}'
emojiMap[982] = '\u{1F98C}'
emojiMap[983] = '\u{1F98D}'
emojiMap[984] = '\u{1F98E}'
emojiMap[985] = '\u{1F98F}'
emojiMap[986] = '\u{1F990}'
emojiMap[987] = '\u{1F991}'
emojiMap[988] = '\u{1F992}'
emojiMap[989] = '\u{1F993}'
emojiMap[990] = '\u{1F994}'
emojiMap[991] = '\u{1F995}'
emojiMap[992] = '\u{1F996}'
emojiMap[993] = '\u{1F997}'
emojiMap[994] = '\u{1F998}'
emojiMap[995] = '\u{1F999}'
emojiMap[996] = '\u{1F99A}'
emojiMap[997] = '\u{1F99B}'
emojiMap[998] = '\u{1F99C}'
emojiMap[999] = '\u{1F99D}'
emojiMap[1000] = '\u{1F99E}'
emojiMap[1001] = '\u{1F99F}'
emojiMap[1002] = '\u{1F9A0}'
emojiMap[1003] = '\u{1F9A1}'
emojiMap[1004] = '\u{1F9A2}'
emojiMap[1005] = '\u{1F9B0}'
emojiMap[1006] = '\u{1F9B1}'
emojiMap[1007] = '\u{1F9B2}'
emojiMap[1008] = '\u{1F9B3}'
emojiMap[1009] = '\u{1F9B4}'
emojiMap[1010] = '\u{1F9B5}'
emojiMap[1011] = '\u{1F9B6}'
emojiMap[1012] = '\u{1F9B7}'
emojiMap[1013] = '\u{1F9B8}'
emojiMap[1014] = '\u{1F9B9}'
emojiMap[1015] = '\u{1F9C0}'
emojiMap[1016] = '\u{1F9C1}'
emojiMap[1017] = '\u{1F9C2}'
emojiMap[1018] = '\u{1F9D0}'
emojiMap[1019] = '\u{1F9D1}'
emojiMap[1020] = '\u{1F9D2}'
emojiMap[1021] = '\u{1F9D3}'
emojiMap[1022] = '\u{1F9D4}'
emojiMap[1023] = '\u{1F9D5}'

export const emojis = Object.freeze(emojiMap)

export const revEmojis = Object.freeze(emojiMap.reduce((obj, emoji, index) => ({...obj, [emoji]: index}), {}))
