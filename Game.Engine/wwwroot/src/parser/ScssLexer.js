// Generated from ScssLexer.g4 by ANTLR 4.5.3
// jshint ignore: start
/* eslint-disable */

const antlr4 = require("antlr4/index");

const serializedATN = [
    "\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002?\u022f\b\u0001\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003",
    "\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006",
    "\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b",
    "\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f",
    "\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013",
    "\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016",
    "\u0004\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a",
    "\t\u001a\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d",
    '\u0004\u001e\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004"',
    "\t\"\u0004#\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004'\t'\u0004(\t(\u0004",
    ")\t)\u0004*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0004",
    "0\t0\u00041\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u0004",
    "7\t7\u00048\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004",
    ">\t>\u0004?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004",
    "E\tE\u0004F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "\u00c1\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u00c7\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003",
    '!\u0003!\u0003!\u0003"\u0003"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003',
    "$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003'\u0003'\u0003",
    "'\u0003'\u0003'\u0003'\u0003(\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00030\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00033\u00033\u00073\u0178",
    "\n3\f3\u000e3\u017b\u000b3\u00033\u00033\u00033\u00073\u0180\n3\f3\u000e",
    "3\u0183\u000b3\u00053\u0185\n3\u00033\u00033\u00034\u00034\u00074\u018b",
    "\n4\f4\u000e4\u018e\u000b4\u00034\u00034\u00034\u00074\u0193\n4\f4\u000e",
    "4\u0196\u000b4\u00034\u00054\u0199\n4\u00035\u00035\u00036\u00036\u0007",
    "6\u019f\n6\f6\u000e6\u01a2\u000b6\u00036\u00056\u01a5\n6\u00036\u0006",
    "6\u01a8\n6\r6\u000e6\u01a9\u00036\u00076\u01ad\n6\f6\u000e6\u01b0\u000b",
    "6\u00036\u00056\u01b3\n6\u00036\u00066\u01b6\n6\r6\u000e6\u01b7\u0005",
    "6\u01ba\n6\u00037\u00037\u00067\u01be\n7\r7\u000e7\u01bf\u00038\u0003",
    "8\u00038\u00068\u01c5\n8\r8\u000e8\u01c6\u00038\u00038\u00039\u0003",
    "9\u00039\u00039\u00079\u01cf\n9\f9\u000e9\u01d2\u000b9\u00039\u0003",
    "9\u00039\u00059\u01d7\n9\u00059\u01d9\n9\u00039\u00039\u0003:\u0003",
    ":\u0003:\u0003:\u0007:\u01e1\n:\f:\u000e:\u01e4\u000b:\u0003:\u0003",
    ":\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003;\u0003<\u0003<\u0006",
    "<\u01f1\n<\r<\u000e<\u01f2\u0005<\u01f5\n<\u0003=\u0003=\u0003=\u0003",
    "=\u0003=\u0003>\u0003>\u0003>\u0003>\u0003>\u0003?\u0003?\u0003?\u0003",
    "?\u0003@\u0003@\u0003A\u0003A\u0003A\u0003A\u0003B\u0003B\u0003C\u0003",
    "C\u0003C\u0003C\u0003C\u0003D\u0003D\u0003D\u0003D\u0003D\u0003E\u0003",
    "E\u0003E\u0003E\u0003E\u0003F\u0003F\u0003F\u0003F\u0003F\u0003G\u0003",
    "G\u0003G\u0003G\u0003G\u0003H\u0003H\u0003H\u0003H\u0003H\u0003I\u0003",
    "I\u0003I\u0003I\u0003I\u0003\u01e2\u0002J\u0005\u0003\u0007\u0004\t",
    "\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017",
    "\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013",
    "'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c9\u001d",
    ";\u001e=\u001f? A!C\"E#G$I%K&M'O(Q)S*U+W,Y-[.]/_0a1c2e3g4i\u0002k5",
    "m6o7q8s9u:w;y<{\u0002}=\u007f\u0002\u0081>\u0083\u0002\u0085?\u0087",
    "\u0002\u0089\u0002\u008b\u0002\u008d\u0002\u008f\u0002\u0091\u0002\u0093",
    "\u0002\u0005\u0002\u0003\u0004\n\u0006\u0002C\\aac|\u0102\u0000\b\u0002",
    "//2;C\\aac|\u0102\u0000\u0005\u0002\f\f\u000f\u000f$$\u0005\u0002\f",
    '\f\u000f\u000f))\u0005\u00022;CHch\u0005\u0002\u000b\f\u000f\u000f"',
    '"\u0004\u0002\f\f\u000f\u000f\u0006\u0002\f\f\u000f\u000f++==\u0251',
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002",
    "\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002",
    "\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002",
    ";\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003",
    "\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002",
    "\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002",
    "\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002",
    "\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002",
    "Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003",
    "\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002",
    "\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002",
    "\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002",
    "\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002",
    "g\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003",
    "\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002",
    "\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002",
    "\u0002\u0003w\u0003\u0002\u0002\u0002\u0003y\u0003\u0002\u0002\u0002",
    "\u0004{\u0003\u0002\u0002\u0002\u0004}\u0003\u0002\u0002\u0002\u0004",
    "\u007f\u0003\u0002\u0002\u0002\u0004\u0081\u0003\u0002\u0002\u0002\u0004",
    "\u0083\u0003\u0002\u0002\u0002\u0004\u0085\u0003\u0002\u0002\u0002\u0004",
    "\u0087\u0003\u0002\u0002\u0002\u0004\u0089\u0003\u0002\u0002\u0002\u0004",
    "\u008b\u0003\u0002\u0002\u0002\u0004\u008d\u0003\u0002\u0002\u0002\u0004",
    "\u008f\u0003\u0002\u0002\u0002\u0004\u0091\u0003\u0002\u0002\u0002\u0004",
    "\u0093\u0003\u0002\u0002\u0002\u0005\u0095\u0003\u0002\u0002\u0002\u0007",
    "\u009a\u0003\u0002\u0002\u0002\t\u00c0\u0003\u0002\u0002\u0002\u000b",
    "\u00c6\u0003\u0002\u0002\u0002\r\u00c8\u0003\u0002\u0002\u0002\u000f",
    "\u00cc\u0003\u0002\u0002\u0002\u0011\u00d1\u0003\u0002\u0002\u0002\u0013",
    "\u00d3\u0003\u0002\u0002\u0002\u0015\u00d5\u0003\u0002\u0002\u0002\u0017",
    "\u00d7\u0003\u0002\u0002\u0002\u0019\u00d9\u0003\u0002\u0002\u0002\u001b",
    "\u00db\u0003\u0002\u0002\u0002\u001d\u00dd\u0003\u0002\u0002\u0002\u001f",
    "\u00df\u0003\u0002\u0002\u0002!\u00e1\u0003\u0002\u0002\u0002#\u00e3",
    "\u0003\u0002\u0002\u0002%\u00e5\u0003\u0002\u0002\u0002'\u00e7\u0003",
    "\u0002\u0002\u0002)\u00e9\u0003\u0002\u0002\u0002+\u00eb\u0003\u0002",
    "\u0002\u0002-\u00ed\u0003\u0002\u0002\u0002/\u00ef\u0003\u0002\u0002",
    "\u00021\u00f1\u0003\u0002\u0002\u00023\u00f3\u0003\u0002\u0002\u0002",
    "5\u00f6\u0003\u0002\u0002\u00027\u00f8\u0003\u0002\u0002\u00029\u00fa",
    "\u0003\u0002\u0002\u0002;\u00fc\u0003\u0002\u0002\u0002=\u00fe\u0003",
    "\u0002\u0002\u0002?\u0100\u0003\u0002\u0002\u0002A\u0108\u0003\u0002",
    "\u0002\u0002C\u010b\u0003\u0002\u0002\u0002E\u010e\u0003\u0002\u0002",
    "\u0002G\u0110\u0003\u0002\u0002\u0002I\u0113\u0003\u0002\u0002\u0002",
    "K\u0116\u0003\u0002\u0002\u0002M\u011d\u0003\u0002\u0002\u0002O\u0127",
    "\u0003\u0002\u0002\u0002Q\u012d\u0003\u0002\u0002\u0002S\u0130\u0003",
    "\u0002\u0002\u0002U\u0134\u0003\u0002\u0002\u0002W\u0139\u0003\u0002",
    "\u0002\u0002Y\u0140\u0003\u0002\u0002\u0002[\u0146\u0003\u0002\u0002",
    "\u0002]\u014f\u0003\u0002\u0002\u0002_\u0157\u0003\u0002\u0002\u0002",
    "a\u015f\u0003\u0002\u0002\u0002c\u0164\u0003\u0002\u0002\u0002e\u016c",
    "\u0003\u0002\u0002\u0002g\u0184\u0003\u0002\u0002\u0002i\u0198\u0003",
    "\u0002\u0002\u0002k\u019a\u0003\u0002\u0002\u0002m\u01b9\u0003\u0002",
    "\u0002\u0002o\u01bb\u0003\u0002\u0002\u0002q\u01c4\u0003\u0002\u0002",
    "\u0002s\u01ca\u0003\u0002\u0002\u0002u\u01dc\u0003\u0002\u0002\u0002",
    "w\u01ea\u0003\u0002\u0002\u0002y\u01f4\u0003\u0002\u0002\u0002{\u01f6",
    "\u0003\u0002\u0002\u0002}\u01fb\u0003\u0002\u0002\u0002\u007f\u0200",
    "\u0003\u0002\u0002\u0002\u0081\u0204\u0003\u0002\u0002\u0002\u0083\u0206",
    "\u0003\u0002\u0002\u0002\u0085\u020a\u0003\u0002\u0002\u0002\u0087\u020c",
    "\u0003\u0002\u0002\u0002\u0089\u0211\u0003\u0002\u0002\u0002\u008b\u0216",
    "\u0003\u0002\u0002\u0002\u008d\u021b\u0003\u0002\u0002\u0002\u008f\u0220",
    "\u0003\u0002\u0002\u0002\u0091\u0225\u0003\u0002\u0002\u0002\u0093\u022a",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0007p\u0002\u0002\u0096\u0097",
    "\u0007w\u0002\u0002\u0097\u0098\u0007n\u0002\u0002\u0098\u0099\u0007",
    "n\u0002\u0002\u0099\u0006\u0003\u0002\u0002\u0002\u009a\u009b\u0007",
    "k\u0002\u0002\u009b\u009c\u0007p\u0002\u0002\u009c\b\u0003\u0002\u0002",
    "\u0002\u009d\u00c1\u0007'\u0002\u0002\u009e\u009f\u0007r\u0002\u0002",
    "\u009f\u00c1\u0007z\u0002\u0002\u00a0\u00a1\u0007e\u0002\u0002\u00a1",
    "\u00c1\u0007o\u0002\u0002\u00a2\u00a3\u0007o\u0002\u0002\u00a3\u00c1",
    "\u0007o\u0002\u0002\u00a4\u00a5\u0007k\u0002\u0002\u00a5\u00c1\u0007",
    "p\u0002\u0002\u00a6\u00a7\u0007r\u0002\u0002\u00a7\u00c1\u0007v\u0002",
    "\u0002\u00a8\u00a9\u0007r\u0002\u0002\u00a9\u00c1\u0007e\u0002\u0002",
    "\u00aa\u00ab\u0007g\u0002\u0002\u00ab\u00c1\u0007o\u0002\u0002\u00ac",
    "\u00ad\u0007g\u0002\u0002\u00ad\u00c1\u0007z\u0002\u0002\u00ae\u00af",
    "\u0007f\u0002\u0002\u00af\u00b0\u0007g\u0002\u0002\u00b0\u00c1\u0007",
    "i\u0002\u0002\u00b1\u00b2\u0007t\u0002\u0002\u00b2\u00b3\u0007c\u0002",
    "\u0002\u00b3\u00c1\u0007f\u0002\u0002\u00b4\u00b5\u0007i\u0002\u0002",
    "\u00b5\u00b6\u0007t\u0002\u0002\u00b6\u00b7\u0007c\u0002\u0002\u00b7",
    "\u00c1\u0007f\u0002\u0002\u00b8\u00b9\u0007o\u0002\u0002\u00b9\u00c1",
    "\u0007u\u0002\u0002\u00ba\u00c1\u0007u\u0002\u0002\u00bb\u00bc\u0007",
    "j\u0002\u0002\u00bc\u00c1\u0007|\u0002\u0002\u00bd\u00be\u0007m\u0002",
    "\u0002\u00be\u00bf\u0007j\u0002\u0002\u00bf\u00c1\u0007|\u0002\u0002",
    "\u00c0\u009d\u0003\u0002\u0002\u0002\u00c0\u009e\u0003\u0002\u0002\u0002",
    "\u00c0\u00a0\u0003\u0002\u0002\u0002\u00c0\u00a2\u0003\u0002\u0002\u0002",
    "\u00c0\u00a4\u0003\u0002\u0002\u0002\u00c0\u00a6\u0003\u0002\u0002\u0002",
    "\u00c0\u00a8\u0003\u0002\u0002\u0002\u00c0\u00aa\u0003\u0002\u0002\u0002",
    "\u00c0\u00ac\u0003\u0002\u0002\u0002\u00c0\u00ae\u0003\u0002\u0002\u0002",
    "\u00c0\u00b1\u0003\u0002\u0002\u0002\u00c0\u00b4\u0003\u0002\u0002\u0002",
    "\u00c0\u00b8\u0003\u0002\u0002\u0002\u00c0\u00ba\u0003\u0002\u0002\u0002",
    "\u00c0\u00bb\u0003\u0002\u0002\u0002\u00c0\u00bd\u0003\u0002\u0002\u0002",
    "\u00c1\n\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007(\u0002\u0002\u00c3",
    "\u00c7\u0007(\u0002\u0002\u00c4\u00c5\u0007~\u0002\u0002\u00c5\u00c7",
    "\u0007~\u0002\u0002\u00c6\u00c2\u0003\u0002\u0002\u0002\u00c6\u00c4",
    "\u0003\u0002\u0002\u0002\u00c7\f\u0003\u0002\u0002\u0002\u00c8\u00c9",
    "\u00070\u0002\u0002\u00c9\u00ca\u00070\u0002\u0002\u00ca\u00cb\u0007",
    "0\u0002\u0002\u00cb\u000e\u0003\u0002\u0002\u0002\u00cc\u00cd\u0005",
    "1\u0018\u0002\u00cd\u00ce\u0005\u0015\n\u0002\u00ce\u00cf\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\b\u0007\u0002\u0002\u00d0\u0010\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0007*\u0002\u0002\u00d2\u0012\u0003\u0002",
    "\u0002\u0002\u00d3\u00d4\u0007+\u0002\u0002\u00d4\u0014\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0007}\u0002\u0002\u00d6\u0016\u0003\u0002",
    "\u0002\u0002\u00d7\u00d8\u0007\u007f\u0002\u0002\u00d8\u0018\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0007]\u0002\u0002\u00da\u001a\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\u0007_\u0002\u0002\u00dc\u001c\u0003\u0002",
    "\u0002\u0002\u00dd\u00de\u0007@\u0002\u0002\u00de\u001e\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007\u0080\u0002\u0002\u00e0 \u0003\u0002",
    '\u0002\u0002\u00e1\u00e2\u0007>\u0002\u0002\u00e2"\u0003\u0002\u0002',
    "\u0002\u00e3\u00e4\u0007<\u0002\u0002\u00e4$\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\u0007=\u0002\u0002\u00e6&\u0003\u0002\u0002\u0002\u00e7",
    "\u00e8\u0007.\u0002\u0002\u00e8(\u0003\u0002\u0002\u0002\u00e9\u00ea",
    "\u00070\u0002\u0002\u00ea*\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007",
    "&\u0002\u0002\u00ec,\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007B\u0002",
    "\u0002\u00ee.\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007(\u0002\u0002",
    "\u00f00\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007%\u0002\u0002\u00f2",
    "2\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007<\u0002\u0002\u00f4\u00f5",
    "\u0007<\u0002\u0002\u00f54\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007",
    "-\u0002\u0002\u00f76\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007,\u0002",
    "\u0002\u00f98\u0003\u0002\u0002\u0002\u00fa\u00fb\u00071\u0002\u0002",
    "\u00fb:\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007/\u0002\u0002\u00fd",
    "<\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007'\u0002\u0002\u00ff>\u0003",
    "\u0002\u0002\u0002\u0100\u0101\u0007w\u0002\u0002\u0101\u0102\u0007",
    "t\u0002\u0002\u0102\u0103\u0007n\u0002\u0002\u0103\u0104\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0005\u0011\b\u0002\u0105\u0106\u0003\u0002",
    "\u0002\u0002\u0106\u0107\b\u001f\u0003\u0002\u0107@\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0007?\u0002\u0002\u0109\u010a\u0007?\u0002\u0002",
    "\u010aB\u0003\u0002\u0002\u0002\u010b\u010c\u0007#\u0002\u0002\u010c",
    "\u010d\u0007?\u0002\u0002\u010dD\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u0007?\u0002\u0002\u010fF\u0003\u0002\u0002\u0002\u0110\u0111\u0007",
    "~\u0002\u0002\u0111\u0112\u0007?\u0002\u0002\u0112H\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0007\u0080\u0002\u0002\u0114\u0115\u0007?\u0002",
    "\u0002\u0115J\u0003\u0002\u0002\u0002\u0116\u0117\u0007B\u0002\u0002",
    "\u0117\u0118\u0007o\u0002\u0002\u0118\u0119\u0007k\u0002\u0002\u0119",
    "\u011a\u0007z\u0002\u0002\u011a\u011b\u0007k\u0002\u0002\u011b\u011c",
    "\u0007p\u0002\u0002\u011cL\u0003\u0002\u0002\u0002\u011d\u011e\u0007",
    "B\u0002\u0002\u011e\u011f\u0007h\u0002\u0002\u011f\u0120\u0007w\u0002",
    "\u0002\u0120\u0121\u0007p\u0002\u0002\u0121\u0122\u0007e\u0002\u0002",
    "\u0122\u0123\u0007v\u0002\u0002\u0123\u0124\u0007k\u0002\u0002\u0124",
    "\u0125\u0007q\u0002\u0002\u0125\u0126\u0007p\u0002\u0002\u0126N\u0003",
    "\u0002\u0002\u0002\u0127\u0128\u0007B\u0002\u0002\u0128\u0129\u0007",
    "g\u0002\u0002\u0129\u012a\u0007n\u0002\u0002\u012a\u012b\u0007u\u0002",
    "\u0002\u012b\u012c\u0007g\u0002\u0002\u012cP\u0003\u0002\u0002\u0002",
    "\u012d\u012e\u0007k\u0002\u0002\u012e\u012f\u0007h\u0002\u0002\u012f",
    "R\u0003\u0002\u0002\u0002\u0130\u0131\u0007B\u0002\u0002\u0131\u0132",
    "\u0007k\u0002\u0002\u0132\u0133\u0007h\u0002\u0002\u0133T\u0003\u0002",
    "\u0002\u0002\u0134\u0135\u0007B\u0002\u0002\u0135\u0136\u0007h\u0002",
    "\u0002\u0136\u0137\u0007q\u0002\u0002\u0137\u0138\u0007t\u0002\u0002",
    "\u0138V\u0003\u0002\u0002\u0002\u0139\u013a\u0007B\u0002\u0002\u013a",
    "\u013b\u0007y\u0002\u0002\u013b\u013c\u0007j\u0002\u0002\u013c\u013d",
    "\u0007k\u0002\u0002\u013d\u013e\u0007n\u0002\u0002\u013e\u013f\u0007",
    "g\u0002\u0002\u013fX\u0003\u0002\u0002\u0002\u0140\u0141\u0007B\u0002",
    "\u0002\u0141\u0142\u0007g\u0002\u0002\u0142\u0143\u0007c\u0002\u0002",
    "\u0143\u0144\u0007e\u0002\u0002\u0144\u0145\u0007j\u0002\u0002\u0145",
    "Z\u0003\u0002\u0002\u0002\u0146\u0147\u0007B\u0002\u0002\u0147\u0148",
    "\u0007k\u0002\u0002\u0148\u0149\u0007p\u0002\u0002\u0149\u014a\u0007",
    "e\u0002\u0002\u014a\u014b\u0007n\u0002\u0002\u014b\u014c\u0007w\u0002",
    "\u0002\u014c\u014d\u0007f\u0002\u0002\u014d\u014e\u0007g\u0002\u0002",
    "\u014e\\\u0003\u0002\u0002\u0002\u014f\u0150\u0007B\u0002\u0002\u0150",
    "\u0151\u0007k\u0002\u0002\u0151\u0152\u0007o\u0002\u0002\u0152\u0153",
    "\u0007r\u0002\u0002\u0153\u0154\u0007q\u0002\u0002\u0154\u0155\u0007",
    "t\u0002\u0002\u0155\u0156\u0007v\u0002\u0002\u0156^\u0003\u0002\u0002",
    "\u0002\u0157\u0158\u0007B\u0002\u0002\u0158\u0159\u0007t\u0002\u0002",
    "\u0159\u015a\u0007g\u0002\u0002\u015a\u015b\u0007v\u0002\u0002\u015b",
    "\u015c\u0007w\u0002\u0002\u015c\u015d\u0007t\u0002\u0002\u015d\u015e",
    "\u0007p\u0002\u0002\u015e`\u0003\u0002\u0002\u0002\u015f\u0160\u0007",
    "h\u0002\u0002\u0160\u0161\u0007t\u0002\u0002\u0161\u0162\u0007q\u0002",
    "\u0002\u0162\u0163\u0007o\u0002\u0002\u0163b\u0003\u0002\u0002\u0002",
    "\u0164\u0165\u0007v\u0002\u0002\u0165\u0166\u0007j\u0002\u0002\u0166",
    "\u0167\u0007t\u0002\u0002\u0167\u0168\u0007q\u0002\u0002\u0168\u0169",
    "\u0007w\u0002\u0002\u0169\u016a\u0007i\u0002\u0002\u016a\u016b\u0007",
    "j\u0002\u0002\u016bd\u0003\u0002\u0002\u0002\u016c\u016d\u0007#\u0002",
    "\u0002\u016d\u016e\u0007f\u0002\u0002\u016e\u016f\u0007g\u0002\u0002",
    "\u016f\u0170\u0007h\u0002\u0002\u0170\u0171\u0007c\u0002\u0002\u0171",
    "\u0172\u0007w\u0002\u0002\u0172\u0173\u0007n\u0002\u0002\u0173\u0174",
    "\u0007v\u0002\u0002\u0174f\u0003\u0002\u0002\u0002\u0175\u0179\t\u0002",
    "\u0002\u0002\u0176\u0178\t\u0003\u0002\u0002\u0177\u0176\u0003\u0002",
    "\u0002\u0002\u0178\u017b\u0003\u0002\u0002\u0002\u0179\u0177\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a\u0185\u0003\u0002",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017c\u017d\u0007/",
    "\u0002\u0002\u017d\u0181\t\u0002\u0002\u0002\u017e\u0180\t\u0003\u0002",
    "\u0002\u017f\u017e\u0003\u0002\u0002\u0002\u0180\u0183\u0003\u0002\u0002",
    "\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002",
    "\u0002\u0182\u0185\u0003\u0002\u0002\u0002\u0183\u0181\u0003\u0002\u0002",
    "\u0002\u0184\u0175\u0003\u0002\u0002\u0002\u0184\u017c\u0003\u0002\u0002",
    "\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187\b3\u0002\u0002",
    "\u0187h\u0003\u0002\u0002\u0002\u0188\u018c\u0007$\u0002\u0002\u0189",
    "\u018b\n\u0004\u0002\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018b",
    "\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018c",
    "\u018d\u0003\u0002\u0002\u0002\u018d\u018f\u0003\u0002\u0002\u0002\u018e",
    "\u018c\u0003\u0002\u0002\u0002\u018f\u0199\u0007$\u0002\u0002\u0190",
    "\u0194\u0007)\u0002\u0002\u0191\u0193\n\u0005\u0002\u0002\u0192\u0191",
    "\u0003\u0002\u0002\u0002\u0193\u0196\u0003\u0002\u0002\u0002\u0194\u0192",
    "\u0003\u0002\u0002\u0002\u0194\u0195\u0003\u0002\u0002\u0002\u0195\u0197",
    "\u0003\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0197\u0199",
    "\u0007)\u0002\u0002\u0198\u0188\u0003\u0002\u0002\u0002\u0198\u0190",
    "\u0003\u0002\u0002\u0002\u0199j\u0003\u0002\u0002\u0002\u019a\u019b",
    "\u0005i4\u0002\u019bl\u0003\u0002\u0002\u0002\u019c\u01a4\u0007/\u0002",
    "\u0002\u019d\u019f\u00042;\u0002\u019e\u019d\u0003\u0002\u0002\u0002",
    "\u019f\u01a2\u0003\u0002\u0002\u0002\u01a0\u019e\u0003\u0002\u0002\u0002",
    "\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1\u01a3\u0003\u0002\u0002\u0002",
    "\u01a2\u01a0\u0003\u0002\u0002\u0002\u01a3\u01a5\u00070\u0002\u0002",
    "\u01a4\u01a0\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003\u0002\u0002\u0002",
    "\u01a5\u01a7\u0003\u0002\u0002\u0002\u01a6\u01a8\u00042;\u0002\u01a7",
    "\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9",
    "\u01a7\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa",
    "\u01ba\u0003\u0002\u0002\u0002\u01ab\u01ad\u00042;\u0002\u01ac\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01b0\u0003\u0002\u0002\u0002\u01ae\u01ac",
    "\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af\u01b1",
    "\u0003\u0002\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b1\u01b3",
    "\u00070\u0002\u0002\u01b2\u01ae\u0003\u0002\u0002\u0002\u01b2\u01b3",
    "\u0003\u0002\u0002\u0002\u01b3\u01b5\u0003\u0002\u0002\u0002\u01b4\u01b6",
    "\u00042;\u0002\u01b5\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003",
    "\u0002\u0002\u0002\u01b7\u01b5\u0003\u0002\u0002\u0002\u01b7\u01b8\u0003",
    "\u0002\u0002\u0002\u01b8\u01ba\u0003\u0002\u0002\u0002\u01b9\u019c\u0003",
    "\u0002\u0002\u0002\u01b9\u01b2\u0003\u0002\u0002\u0002\u01ban\u0003",
    "\u0002\u0002\u0002\u01bb\u01bd\u0007%\u0002\u0002\u01bc\u01be\t\u0006",
    "\u0002\u0002\u01bd\u01bc\u0003\u0002\u0002\u0002\u01be\u01bf\u0003\u0002",
    "\u0002\u0002\u01bf\u01bd\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002",
    "\u0002\u0002\u01c0p\u0003\u0002\u0002\u0002\u01c1\u01c5\t\u0007\u0002",
    "\u0002\u01c2\u01c3\u0007\u000f\u0002\u0002\u01c3\u01c5\u0007\f\u0002",
    "\u0002\u01c4\u01c1\u0003\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002",
    "\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002",
    "\u0002\u01c6\u01c7\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002",
    "\u0002\u01c8\u01c9\b8\u0004\u0002\u01c9r\u0003\u0002\u0002\u0002\u01ca",
    "\u01cb\u00071\u0002\u0002\u01cb\u01cc\u00071\u0002\u0002\u01cc\u01d0",
    "\u0003\u0002\u0002\u0002\u01cd\u01cf\n\b\u0002\u0002\u01ce\u01cd\u0003",
    "\u0002\u0002\u0002\u01cf\u01d2\u0003\u0002\u0002\u0002\u01d0\u01ce\u0003",
    "\u0002\u0002\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002\u01d1\u01d8\u0003",
    "\u0002\u0002\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d3\u01d9\u0007",
    "\f\u0002\u0002\u01d4\u01d6\u0007\u000f\u0002\u0002\u01d5\u01d7\u0007",
    "\f\u0002\u0002\u01d6\u01d5\u0003\u0002\u0002\u0002\u01d6\u01d7\u0003",
    "\u0002\u0002\u0002\u01d7\u01d9\u0003\u0002\u0002\u0002\u01d8\u01d3\u0003",
    "\u0002\u0002\u0002\u01d8\u01d4\u0003\u0002\u0002\u0002\u01d9\u01da\u0003",
    "\u0002\u0002\u0002\u01da\u01db\b9\u0004\u0002\u01dbt\u0003\u0002\u0002",
    "\u0002\u01dc\u01dd\u00071\u0002\u0002\u01dd\u01de\u0007,\u0002\u0002",
    "\u01de\u01e2\u0003\u0002\u0002\u0002\u01df\u01e1\u000b\u0002\u0002\u0002",
    "\u01e0\u01df\u0003\u0002\u0002\u0002\u01e1\u01e4\u0003\u0002\u0002\u0002",
    "\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e2\u01e0\u0003\u0002\u0002\u0002",
    "\u01e3\u01e5\u0003\u0002\u0002\u0002\u01e4\u01e2\u0003\u0002\u0002\u0002",
    "\u01e5\u01e6\u0007,\u0002\u0002\u01e6\u01e7\u00071\u0002\u0002\u01e7",
    "\u01e8\u0003\u0002\u0002\u0002\u01e8\u01e9\b:\u0004\u0002\u01e9v\u0003",
    "\u0002\u0002\u0002\u01ea\u01eb\u0005\u0013\t\u0002\u01eb\u01ec\u0003",
    "\u0002\u0002\u0002\u01ec\u01ed\b;\u0005\u0002\u01edx\u0003\u0002\u0002",
    "\u0002\u01ee\u01f5\u0005i4\u0002\u01ef\u01f1\n\t\u0002\u0002\u01f0\u01ef",
    "\u0003\u0002\u0002\u0002\u01f1\u01f2\u0003\u0002\u0002\u0002\u01f2\u01f0",
    "\u0003\u0002\u0002\u0002\u01f2\u01f3\u0003\u0002\u0002\u0002\u01f3\u01f5",
    "\u0003\u0002\u0002\u0002\u01f4\u01ee\u0003\u0002\u0002\u0002\u01f4\u01f0",
    "\u0003\u0002\u0002\u0002\u01f5z\u0003\u0002\u0002\u0002\u01f6\u01f7",
    "\u0005\u0015\n\u0002\u01f7\u01f8\u0003\u0002\u0002\u0002\u01f8\u01f9",
    "\b=\u0005\u0002\u01f9\u01fa\b=\u0006\u0002\u01fa|\u0003\u0002\u0002",
    "\u0002\u01fb\u01fc\u0005q8\u0002\u01fc\u01fd\u0003\u0002\u0002\u0002",
    "\u01fd\u01fe\b>\u0005\u0002\u01fe\u01ff\b>\u0004\u0002\u01ff~\u0003",
    "\u0002\u0002\u0002\u0200\u0201\u0005+\u0015\u0002\u0201\u0202\u0003",
    "\u0002\u0002\u0002\u0202\u0203\b?\u0007\u0002\u0203\u0080\u0003\u0002",
    "\u0002\u0002\u0204\u0205\u0005\u000f\u0007\u0002\u0205\u0082\u0003\u0002",
    "\u0002\u0002\u0206\u0207\u0005\u0017\u000b\u0002\u0207\u0208\u0003\u0002",
    "\u0002\u0002\u0208\u0209\bA\b\u0002\u0209\u0084\u0003\u0002\u0002\u0002",
    "\u020a\u020b\u0005g3\u0002\u020b\u0086\u0003\u0002\u0002\u0002\u020c",
    "\u020d\u0005\r\u0006\u0002\u020d\u020e\u0003\u0002\u0002\u0002\u020e",
    "\u020f\bC\u0005\u0002\u020f\u0210\bC\t\u0002\u0210\u0088\u0003\u0002",
    "\u0002\u0002\u0211\u0212\u0005)\u0014\u0002\u0212\u0213\u0003\u0002",
    "\u0002\u0002\u0213\u0214\bD\u0005\u0002\u0214\u0215\bD\n\u0002\u0215",
    "\u008a\u0003\u0002\u0002\u0002\u0216\u0217\u0005\u0011\b\u0002\u0217",
    "\u0218\u0003\u0002\u0002\u0002\u0218\u0219\bE\u0005\u0002\u0219\u021a",
    "\bE\u000b\u0002\u021a\u008c\u0003\u0002\u0002\u0002\u021b\u021c\u0005",
    "\u0013\t\u0002\u021c\u021d\u0003\u0002\u0002\u0002\u021d\u021e\bF\u0005",
    "\u0002\u021e\u021f\bF\f\u0002\u021f\u008e\u0003\u0002\u0002\u0002\u0220",
    "\u0221\u0005#\u0011\u0002\u0221\u0222\u0003\u0002\u0002\u0002\u0222",
    "\u0223\bG\u0005\u0002\u0223\u0224\bG\r\u0002\u0224\u0090\u0003\u0002",
    "\u0002\u0002\u0225\u0226\u0005'\u0013\u0002\u0226\u0227\u0003\u0002",
    "\u0002\u0002\u0227\u0228\bH\u0005\u0002\u0228\u0229\bH\u000e\u0002\u0229",
    "\u0092\u0003\u0002\u0002\u0002\u022a\u022b\u0005%\u0012\u0002\u022b",
    "\u022c\u0003\u0002\u0002\u0002\u022c\u022d\bI\u0005\u0002\u022d\u022e",
    "\bI\u000f\u0002\u022e\u0094\u0003\u0002\u0002\u0002\u001d\u0002\u0003",
    "\u0004\u00c0\u00c6\u0179\u0181\u0184\u018c\u0194\u0198\u01a0\u01a4\u01a9",
    "\u01ae\u01b2\u01b7\u01b9\u01bf\u01c4\u01c6\u01d0\u01d6\u01d8\u01e2\u01f2",
    "\u01f4\u0010\u0007\u0004\u0002\u0007\u0003\u0002\b\u0002\u0002\u0006",
    "\u0002\u0002\t\u000b\u0002\t\u0016\u0002\t\f\u0002\t\u0007\u0002\t\u0015",
    "\u0002\t\t\u0002\t\n\u0002\t\u0012\u0002\t\u0014\u0002\t\u0013\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

function ScssLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ScssLexer.prototype = Object.create(antlr4.Lexer.prototype);
ScssLexer.prototype.constructor = ScssLexer;

ScssLexer.EOF = antlr4.Token.EOF;
ScssLexer.NULL = 1;
ScssLexer.IN = 2;
ScssLexer.Unit = 3;
ScssLexer.COMBINE_COMPARE = 4;
ScssLexer.Ellipsis = 5;
ScssLexer.InterpolationStart = 6;
ScssLexer.LPAREN = 7;
ScssLexer.RPAREN = 8;
ScssLexer.BlockStart = 9;
ScssLexer.BlockEnd = 10;
ScssLexer.LBRACK = 11;
ScssLexer.RBRACK = 12;
ScssLexer.GT = 13;
ScssLexer.TIL = 14;
ScssLexer.LT = 15;
ScssLexer.COLON = 16;
ScssLexer.SEMI = 17;
ScssLexer.COMMA = 18;
ScssLexer.DOT = 19;
ScssLexer.DOLLAR = 20;
ScssLexer.AT = 21;
ScssLexer.AND = 22;
ScssLexer.HASH = 23;
ScssLexer.COLONCOLON = 24;
ScssLexer.PLUS = 25;
ScssLexer.TIMES = 26;
ScssLexer.DIV = 27;
ScssLexer.MINUS = 28;
ScssLexer.PERC = 29;
ScssLexer.UrlStart = 30;
ScssLexer.EQEQ = 31;
ScssLexer.NOTEQ = 32;
ScssLexer.EQ = 33;
ScssLexer.PIPE_EQ = 34;
ScssLexer.TILD_EQ = 35;
ScssLexer.MIXIN = 36;
ScssLexer.FUNCTION = 37;
ScssLexer.AT_ELSE = 38;
ScssLexer.IF = 39;
ScssLexer.AT_IF = 40;
ScssLexer.AT_FOR = 41;
ScssLexer.AT_WHILE = 42;
ScssLexer.AT_EACH = 43;
ScssLexer.INCLUDE = 44;
ScssLexer.IMPORT = 45;
ScssLexer.RETURN = 46;
ScssLexer.FROM = 47;
ScssLexer.THROUGH = 48;
ScssLexer.POUND_DEFAULT = 49;
ScssLexer.Identifier = 50;
ScssLexer.StringLiteral = 51;
ScssLexer.Number = 52;
ScssLexer.Color = 53;
ScssLexer.WS = 54;
ScssLexer.SL_COMMENT = 55;
ScssLexer.COMMENT = 56;
ScssLexer.UrlEnd = 57;
ScssLexer.Url = 58;
ScssLexer.SPACE = 59;
ScssLexer.InterpolationStartAfter = 60;
ScssLexer.IdentifierAfter = 61;

ScssLexer.URL_STARTED = 1;
ScssLexer.IDENTIFY = 2;

ScssLexer.modeNames = ["DEFAULT_MODE", "URL_STARTED", "IDENTIFY"];

ScssLexer.literalNames = [
    null,
    "'null'",
    "'in'",
    null,
    null,
    "'...'",
    null,
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "'>'",
    "'~'",
    "'<'",
    "':'",
    "';'",
    "','",
    "'.'",
    "'$'",
    "'@'",
    "'&'",
    "'#'",
    "'::'",
    "'+'",
    "'*'",
    "'/'",
    "'-'",
    "'%'",
    null,
    "'=='",
    "'!='",
    "'='",
    "'|='",
    "'~='",
    "'@mixin'",
    "'@function'",
    "'@else'",
    "'if'",
    "'@if'",
    "'@for'",
    "'@while'",
    "'@each'",
    "'@include'",
    "'@import'",
    "'@return'",
    "'from'",
    "'through'",
    "'!default'",
];

ScssLexer.symbolicNames = [
    null,
    "NULL",
    "IN",
    "Unit",
    "COMBINE_COMPARE",
    "Ellipsis",
    "InterpolationStart",
    "LPAREN",
    "RPAREN",
    "BlockStart",
    "BlockEnd",
    "LBRACK",
    "RBRACK",
    "GT",
    "TIL",
    "LT",
    "COLON",
    "SEMI",
    "COMMA",
    "DOT",
    "DOLLAR",
    "AT",
    "AND",
    "HASH",
    "COLONCOLON",
    "PLUS",
    "TIMES",
    "DIV",
    "MINUS",
    "PERC",
    "UrlStart",
    "EQEQ",
    "NOTEQ",
    "EQ",
    "PIPE_EQ",
    "TILD_EQ",
    "MIXIN",
    "FUNCTION",
    "AT_ELSE",
    "IF",
    "AT_IF",
    "AT_FOR",
    "AT_WHILE",
    "AT_EACH",
    "INCLUDE",
    "IMPORT",
    "RETURN",
    "FROM",
    "THROUGH",
    "POUND_DEFAULT",
    "Identifier",
    "StringLiteral",
    "Number",
    "Color",
    "WS",
    "SL_COMMENT",
    "COMMENT",
    "UrlEnd",
    "Url",
    "SPACE",
    "InterpolationStartAfter",
    "IdentifierAfter",
];

ScssLexer.ruleNames = [
    "NULL",
    "IN",
    "Unit",
    "COMBINE_COMPARE",
    "Ellipsis",
    "InterpolationStart",
    "LPAREN",
    "RPAREN",
    "BlockStart",
    "BlockEnd",
    "LBRACK",
    "RBRACK",
    "GT",
    "TIL",
    "LT",
    "COLON",
    "SEMI",
    "COMMA",
    "DOT",
    "DOLLAR",
    "AT",
    "AND",
    "HASH",
    "COLONCOLON",
    "PLUS",
    "TIMES",
    "DIV",
    "MINUS",
    "PERC",
    "UrlStart",
    "EQEQ",
    "NOTEQ",
    "EQ",
    "PIPE_EQ",
    "TILD_EQ",
    "MIXIN",
    "FUNCTION",
    "AT_ELSE",
    "IF",
    "AT_IF",
    "AT_FOR",
    "AT_WHILE",
    "AT_EACH",
    "INCLUDE",
    "IMPORT",
    "RETURN",
    "FROM",
    "THROUGH",
    "POUND_DEFAULT",
    "Identifier",
    "STRING",
    "StringLiteral",
    "Number",
    "Color",
    "WS",
    "SL_COMMENT",
    "COMMENT",
    "UrlEnd",
    "Url",
    "BlockStart_ID",
    "SPACE",
    "DOLLAR_ID",
    "InterpolationStartAfter",
    "InterpolationEnd_ID",
    "IdentifierAfter",
    "Ellipsis_ID",
    "DOT_ID",
    "LPAREN_ID",
    "RPAREN_ID",
    "COLON_ID",
    "COMMA_ID",
    "SEMI_ID",
];

ScssLexer.grammarFileName = "ScssLexer.g4";

exports.ScssLexer = ScssLexer;