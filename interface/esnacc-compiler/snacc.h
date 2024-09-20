#ifndef _SNACC_H_
#define _SNACC_H_

#include "version.h"
#include "snacc_defines.h"

#ifndef NULL
#define NULL 0
#endif

void snacc_exit_now(const char* szMethod, const char* szMessage, ...);
#define snacc_exit(szMessage, ...)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \
	{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              \
		snacc_exit_now(__func__, szMessage, ##__VA_ARGS__);                                                                                                                                                                                                                                                                                                                                                                                                                                                        \
	}
#define write_snacc_header(src, header)                                                                                                                                                                                                                                                                                                                                                                                                                                                                            \
	{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              \
		fprintf(src, "%sThis file was generated by estos esnacc (V%s, %s)\n", header, VERSION, RELDATE);                                                                                                                                                                                                                                                                                                                                                                                                           \
		fprintf(src, "%sbased on Coral WinSnacc written by Deepak Gupta\n", header);                                                                                                                                                                                                                                                                                                                                                                                                                               \
		fprintf(src, "%sNOTE: This is a machine generated file - editing not recommended\n", header);                                                                                                                                                                                                                                                                                                                                                                                                              \
	}
#ifdef __cplusplus
extern "C"
{
#endif
	long long ConvertDateToUnixTime(const char* szValue);
	char* ConvertUnixTimeToReadable(const long long tmUnixTime);
#ifdef __cplusplus
}
#endif

/*
 *  Inspired by gdb 4.0, for better or worse...
 *  (grabbed from Barry Brachman - MS)
 *
 *  These macros munge C routine declarations such
 *  that they work for ANSI or non-ANSI C compilers
 */
#ifdef __USE_ANSI_C__

#define PROTO(X) X
#define PARAMS(arglist, args) (args)
#define NOPARAMS() (void)
#define _AND_ ,
#define DOTS , ...

#else /* !__USE_ANSI_C__ */

#define PROTO(X) ()
#define PARAMS(arglist, args) arglist args;
#define NOPARAMS() ()
#define _AND_ ;
#define DOTS
#define void char

#endif /* __USE_ANSI_C__ */

#if COMPILER
// If we have TCL on this system then add TCL to the compiler
#if defined(HAVE_TCLNOT)
#define TCL HAVE_TCL
#define META 1
#endif
#elif defined(ENABLE_TCL) && defined(HAVE_TCL)
#define TCL 1;
#define META 1;
#endif

#ifdef ENABLE_META
#ifndef META
#define META 1
#endif
#endif

#define COMMA ,

#define if_IBM_ENC(code)

#ifdef META
#define if_META(code) code
#else
#define if_META(code)
#endif

#if defined(TCL) && defined(META)
#define if_TCL(code) code
#else
#define if_TCL(code)
#endif

#ifdef __cplusplus
extern "C"
{
#endif

	extern long long gi64NoDeprecatedSymbols;
	extern int gPrivateSymbols;
	extern int gFilterASN1Files;
	extern int giValidationLevel;
	extern int giWriteComments;
	extern int genVersionFile;
	extern int genTSESMCode;
	extern int gNodeVersion;
	extern int gMajorInterfaceVersion;
	extern char gszOutputPath[];

#ifdef __cplusplus
}
#endif

#endif /* _SNACC_H_ */
