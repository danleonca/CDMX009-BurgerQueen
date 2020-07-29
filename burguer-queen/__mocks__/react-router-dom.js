const rrd = jest.genMockFromModule('react-router-dom');
console.log('catrgando mock aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

rrd.useParams = () => console.log('dentro de mock++++++++++') || 'FCKFCS5LrLkKGMbQ8UCp';

module.exports = {
  useParams: () => console.log('dentro de mock++++++++++') || 'FCKFCS5LrLkKGMbQ8UCp';
};
