import reducer, {
  addEntryPoint,
  fetchEntryPoint,
  initialState,
  setEntryPointError,
} from './reducer';

describe('entryPoint reducer', function () {
  it('should return the error state', function () {
    expect(reducer(initialState, setEntryPointError(Error('some error')))).toEqual({
      ...initialState,
      error: Error('some error'),
    });
  });
  it('should return the initialState state', function () {
    expect(reducer(initialState, fetchEntryPoint())).toEqual({
      ...initialState,
    });
  });
  it('should return the updated entry point', function () {
    expect(
      reducer(
        initialState,
        addEntryPoint({
          questions_url: 'url',
        }),
      ),
    ).toEqual({
      ...initialState,
      entryPointUrl: { questions_url: 'url' },
    });
  });
});
