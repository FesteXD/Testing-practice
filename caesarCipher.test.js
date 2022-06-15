import { caesarCipher } from './caesarCipher';

it('cipher', () => {
  expect(
    caesarCipher(
      'If he had anything confidential to say, he wrote it in ..//.,;l;;l;l;l;l.l.l.,,./,./cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.'
    )
  ).toBe(
    'Jg if ibe bozuijoh dpogjefoujbm up tbz, if xspuf ju jo ..//.,;m;;m;m;m;m.m.m.,,./,./djqifs, uibu jt, cz tp dibohjoh uif psefs pg uif mfuufst pg uif bmqibcfu, uibu opu b xpse dpvme cf nbef pvu.'
  );
});
