
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
M
e
m
o
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
P
a
r
a
m
s
,
 
u
s
e
N
a
v
i
g
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
u
s
e
M
u
t
a
t
i
o
n
,
 
u
s
e
Q
u
e
r
y
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{


 
 
A
r
r
o
w
L
e
f
t
,


 
 
S
a
v
e
,


 
 
G
l
o
b
e
,


 
 
L
o
a
d
e
r
2
,


 
 
E
y
e
,


 
 
P
e
n
c
i
l
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
{
 
L
o
a
d
i
n
g
S
c
r
e
e
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
L
o
a
d
i
n
g
S
c
r
e
e
n
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
B
l
o
g
P
o
s
t
,
 
B
l
o
g
C
a
t
e
g
o
r
y
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
O
P
T
I
O
N
S
:
 
{
 
v
a
l
u
e
:
 
B
l
o
g
C
a
t
e
g
o
r
y
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
{
 
v
a
l
u
e
:
 
"
C
A
R
E
E
R
_
A
D
V
I
C
E
"
,
 
l
a
b
e
l
:
 
"
C
a
r
e
e
r
 
A
d
v
i
c
e
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
I
N
T
E
R
V
I
E
W
_
T
I
P
S
"
,
 
l
a
b
e
l
:
 
"
I
n
t
e
r
v
i
e
w
 
T
i
p
s
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
A
L
A
R
Y
_
G
U
I
D
E
"
,
 
l
a
b
e
l
:
 
"
S
a
l
a
r
y
 
G
u
i
d
e
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
I
N
D
U
S
T
R
Y
_
I
N
S
I
G
H
T
S
"
,
 
l
a
b
e
l
:
 
"
I
n
d
u
s
t
r
y
 
I
n
s
i
g
h
t
s
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
R
E
S
U
M
E
_
T
I
P
S
"
,
 
l
a
b
e
l
:
 
"
R
e
s
u
m
e
 
T
i
p
s
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
T
E
C
H
_
T
R
E
N
D
S
"
,
 
l
a
b
e
l
:
 
"
T
e
c
h
 
T
r
e
n
d
s
"
 
}
,


]
;




/
/
 
─
─
─
 
H
T
M
L
 
e
s
c
a
p
i
n
g
 
h
e
l
p
e
r
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


f
u
n
c
t
i
o
n
 
e
s
c
a
p
e
H
t
m
l
(
s
t
r
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
s
t
r


 
 
 
 
.
r
e
p
l
a
c
e
(
/
&
/
g
,
 
'
&
a
m
p
;
'
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
/
g
,
 
'
&
l
t
;
'
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
>
/
g
,
 
'
&
g
t
;
'
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
"
/
g
,
 
'
&
q
u
o
t
;
'
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
'
/
g
,
 
'
&
#
0
3
9
;
'
)
;


}




/
/
 
─
─
─
 
S
i
m
p
l
e
 
m
a
r
k
d
o
w
n
 
p
r
e
v
i
e
w
 
r
e
n
d
e
r
e
r
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


f
u
n
c
t
i
o
n
 
r
e
n
d
e
r
P
r
e
v
i
e
w
(
m
d
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
l
e
t
 
h
t
m
l
 
=
 
m
d
;




 
 
/
/
 
S
t
e
p
 
1
:
 
E
x
t
r
a
c
t
 
c
o
d
e
 
b
l
o
c
k
s
 
i
n
t
o
 
p
l
a
c
e
h
o
l
d
e
r
s
 
(
s
o
 
t
h
e
y
 
a
r
e
n
'
t
 
d
o
u
b
l
e
-
e
s
c
a
p
e
d
)


 
 
c
o
n
s
t
 
c
o
d
e
B
l
o
c
k
s
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
`
`
`
(
\
w
*
)
\
n
(
[
\
s
\
S
]
*
?
)
`
`
`
/
g
,
 
(
_
m
,
 
_
l
a
n
g
,
 
c
o
d
e
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
l
a
c
e
h
o
l
d
e
r
 
=
 
`
%
%
C
O
D
E
B
L
O
C
K
_
$
{
c
o
d
e
B
l
o
c
k
s
.
l
e
n
g
t
h
}
%
%
`
;


 
 
 
 
c
o
d
e
B
l
o
c
k
s
.
p
u
s
h
(


 
 
 
 
 
 
`
<
p
r
e
 
c
l
a
s
s
=
"
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
l
g
 
p
-
4
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
t
e
x
t
-
s
m
 
m
y
-
4
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
<
c
o
d
e
>
$
{
e
s
c
a
p
e
H
t
m
l
(
c
o
d
e
.
t
r
i
m
(
)
)
}
<
/
c
o
d
e
>
<
/
p
r
e
>
`


 
 
 
 
)
;


 
 
 
 
r
e
t
u
r
n
 
p
l
a
c
e
h
o
l
d
e
r
;


 
 
}
)
;




 
 
/
/
 
S
t
e
p
 
2
:
 
E
s
c
a
p
e
 
H
T
M
L
 
i
n
 
t
h
e
 
r
e
m
a
i
n
i
n
g
 
c
o
n
t
e
n
t
 
t
o
 
p
r
e
v
e
n
t
 
X
S
S


 
 
h
t
m
l
 
=
 
e
s
c
a
p
e
H
t
m
l
(
h
t
m
l
)
;




 
 
/
/
 
R
e
s
t
o
r
e
 
c
o
d
e
 
b
l
o
c
k
 
p
l
a
c
e
h
o
l
d
e
r
s


 
 
c
o
d
e
B
l
o
c
k
s
.
f
o
r
E
a
c
h
(
(
b
l
o
c
k
,
 
i
)
 
=
>
 
{


 
 
 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
`
%
%
C
O
D
E
B
L
O
C
K
_
$
{
i
}
%
%
`
,
 
b
l
o
c
k
)
;


 
 
}
)
;




 
 
/
/
 
I
n
l
i
n
e
 
c
o
d
e


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
`
(
[
^
`
]
+
)
`
/
g
,
 
'
<
c
o
d
e
 
c
l
a
s
s
=
"
b
g
-
g
r
a
y
-
8
0
0
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
$
1
<
/
c
o
d
e
>
'
)
;




 
 
/
/
 
H
e
a
d
i
n
g
s


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
#
#
#
#
 
(
.
+
)
$
/
g
m
,
 
'
<
h
4
 
c
l
a
s
s
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
m
t
-
6
 
m
b
-
3
"
>
$
1
<
/
h
4
>
'
)
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
#
#
#
 
(
.
+
)
$
/
g
m
,
 
'
<
h
3
 
c
l
a
s
s
=
"
t
e
x
t
-
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
m
t
-
8
 
m
b
-
3
"
>
$
1
<
/
h
3
>
'
)
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
#
#
 
(
.
+
)
$
/
g
m
,
 
'
<
h
2
 
c
l
a
s
s
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
m
t
-
1
0
 
m
b
-
4
"
>
$
1
<
/
h
2
>
'
)
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
#
 
(
.
+
)
$
/
g
m
,
 
'
<
h
1
 
c
l
a
s
s
=
"
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
m
t
-
1
0
 
m
b
-
4
"
>
$
1
<
/
h
1
>
'
)
;




 
 
/
/
 
B
o
l
d
 
&
 
i
t
a
l
i
c


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
\
*
\
*
\
*
(
.
+
?
)
\
*
\
*
\
*
/
g
,
 
"
<
s
t
r
o
n
g
>
<
e
m
>
$
1
<
/
e
m
>
<
/
s
t
r
o
n
g
>
"
)
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
\
*
\
*
(
.
+
?
)
\
*
\
*
/
g
,
 
"
<
s
t
r
o
n
g
>
$
1
<
/
s
t
r
o
n
g
>
"
)
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
\
*
(
.
+
?
)
\
*
/
g
,
 
"
<
e
m
>
$
1
<
/
e
m
>
"
)
;




 
 
/
/
 
I
m
a
g
e
s


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
!
\
[
(
[
^
\
]
]
*
)
\
]
\
(
(
[
^
)
]
+
)
\
)
/
g
,
 
'
<
i
m
g
 
s
r
c
=
"
$
2
"
 
a
l
t
=
"
$
1
"
 
c
l
a
s
s
=
"
r
o
u
n
d
e
d
-
l
g
 
m
y
-
4
 
m
a
x
-
w
-
f
u
l
l
"
 
/
>
'
)
;




 
 
/
/
 
L
i
n
k
s


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
\
[
(
[
^
\
]
]
+
)
\
]
\
(
(
[
^
)
]
+
)
\
)
/
g
,
 
'
<
a
 
h
r
e
f
=
"
$
2
"
 
c
l
a
s
s
=
"
t
e
x
t
-
b
l
u
e
-
4
0
0
 
u
n
d
e
r
l
i
n
e
"
>
$
1
<
/
a
>
'
)
;




 
 
/
/
 
H
o
r
i
z
o
n
t
a
l
 
r
u
l
e


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
-
-
-
$
/
g
m
,
 
'
<
h
r
 
c
l
a
s
s
=
"
m
y
-
8
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
"
 
/
>
'
)
;




 
 
/
/
 
U
n
o
r
d
e
r
e
d
 
l
i
s
t
s


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
(
?
:
-
 
|
\
*
 
)
(
.
+
)
$
/
g
m
,
 
'
<
l
i
 
c
l
a
s
s
=
"
m
l
-
4
 
l
i
s
t
-
d
i
s
c
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
$
1
<
/
l
i
>
'
)
;




 
 
/
/
 
O
r
d
e
r
e
d
 
l
i
s
t
s


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
\
d
+
\
.
 
(
.
+
)
$
/
g
m
,
 
'
<
l
i
 
c
l
a
s
s
=
"
m
l
-
4
 
l
i
s
t
-
d
e
c
i
m
a
l
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
$
1
<
/
l
i
>
'
)
;




 
 
/
/
 
W
r
a
p
 
c
o
n
s
e
c
u
t
i
v
e
 
<
l
i
>


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
(
(
?
:
<
l
i
 
c
l
a
s
s
=
"
m
l
-
4
 
l
i
s
t
-
d
i
s
c
[
^
"
]
*
"
>
[
^
<
]
*
<
\
/
l
i
>
\
n
?
)
+
)
/
g
,
 
'
<
u
l
 
c
l
a
s
s
=
"
m
y
-
4
 
s
p
a
c
e
-
y
-
1
"
>
$
1
<
/
u
l
>
'
)
;


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
(
(
?
:
<
l
i
 
c
l
a
s
s
=
"
m
l
-
4
 
l
i
s
t
-
d
e
c
i
m
a
l
[
^
"
]
*
"
>
[
^
<
]
*
<
\
/
l
i
>
\
n
?
)
+
)
/
g
,
 
'
<
o
l
 
c
l
a
s
s
=
"
m
y
-
4
 
s
p
a
c
e
-
y
-
1
"
>
$
1
<
/
o
l
>
'
)
;




 
 
/
/
 
B
l
o
c
k
q
u
o
t
e
s


 
 
h
t
m
l
 
=
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
^
>
 
(
.
+
)
$
/
g
m
,
 
'
<
b
l
o
c
k
q
u
o
t
e
 
c
l
a
s
s
=
"
b
o
r
d
e
r
-
l
-
4
 
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
p
l
-
4
 
p
y
-
1
 
m
y
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
i
t
a
l
i
c
"
>
$
1
<
/
b
l
o
c
k
q
u
o
t
e
>
'
)
;




 
 
/
/
 
P
a
r
a
g
r
a
p
h
s


 
 
h
t
m
l
 
=
 
h
t
m
l


 
 
 
 
.
s
p
l
i
t
(
"
\
n
\
n
"
)


 
 
 
 
.
m
a
p
(
(
b
l
o
c
k
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
r
i
m
m
e
d
 
=
 
b
l
o
c
k
.
t
r
i
m
(
)
;


 
 
 
 
 
 
i
f
 
(
!
t
r
i
m
m
e
d
)
 
r
e
t
u
r
n
 
"
"
;


 
 
 
 
 
 
i
f
 
(
/
^
<
[
a
-
z
]
/
.
t
e
s
t
(
t
r
i
m
m
e
d
)
)
 
r
e
t
u
r
n
 
t
r
i
m
m
e
d
;


 
 
 
 
 
 
r
e
t
u
r
n
 
`
<
p
 
c
l
a
s
s
=
"
t
e
x
t
-
g
r
a
y
-
3
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
4
"
>
$
{
t
r
i
m
m
e
d
.
r
e
p
l
a
c
e
(
/
\
n
/
g
,
 
"
<
b
r
 
/
>
"
)
}
<
/
p
>
`
;


 
 
 
 
}
)


 
 
 
 
.
j
o
i
n
(
"
\
n
"
)
;




 
 
r
e
t
u
r
n
 
h
t
m
l
;


}




i
n
t
e
r
f
a
c
e
 
P
o
s
t
F
o
r
m
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
c
o
n
t
e
n
t
:
 
s
t
r
i
n
g
;


 
 
e
x
c
e
r
p
t
:
 
s
t
r
i
n
g
;


 
 
c
a
t
e
g
o
r
y
:
 
B
l
o
g
C
a
t
e
g
o
r
y
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
;


 
 
f
e
a
t
u
r
e
d
I
m
a
g
e
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
e
m
p
t
y
F
o
r
m
:
 
P
o
s
t
F
o
r
m
 
=
 
{


 
 
t
i
t
l
e
:
 
"
"
,


 
 
c
o
n
t
e
n
t
:
 
"
"
,


 
 
e
x
c
e
r
p
t
:
 
"
"
,


 
 
c
a
t
e
g
o
r
y
:
 
"
C
A
R
E
E
R
_
A
D
V
I
C
E
"
,


 
 
t
a
g
s
:
 
"
"
,


 
 
f
e
a
t
u
r
e
d
I
m
a
g
e
:
 
"
"
,


}
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
A
d
m
i
n
B
l
o
g
E
d
i
t
o
r
(
)
 
{


 
 
c
o
n
s
t
 
{
 
i
d
 
}
 
=
 
u
s
e
P
a
r
a
m
s
<
{
 
i
d
:
 
s
t
r
i
n
g
 
}
>
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
)
;


 
 
c
o
n
s
t
 
i
s
E
d
i
t
i
n
g
 
=
 
!
!
i
d
;




 
 
c
o
n
s
t
 
[
f
o
r
m
,
 
s
e
t
F
o
r
m
]
 
=
 
u
s
e
S
t
a
t
e
<
P
o
s
t
F
o
r
m
>
(
e
m
p
t
y
F
o
r
m
)
;


 
 
c
o
n
s
t
 
[
p
r
e
v
i
e
w
M
o
d
e
,
 
s
e
t
P
r
e
v
i
e
w
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;




 
 
/
/
 
F
e
t
c
h
 
e
x
i
s
t
i
n
g
 
p
o
s
t
 
w
h
e
n
 
e
d
i
t
i
n
g


 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
e
x
i
s
t
i
n
g
P
o
s
t
,
 
i
s
L
o
a
d
i
n
g
:
 
l
o
a
d
i
n
g
P
o
s
t
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
{
 
p
o
s
t
:
 
B
l
o
g
P
o
s
t
 
}
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
a
d
m
i
n
"
,
 
"
b
l
o
g
"
,
 
"
e
d
i
t
"
,
 
i
d
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
/
/
 
U
s
e
 
a
d
m
i
n
 
e
n
d
p
o
i
n
t
 
-
 
t
h
e
 
p
u
b
l
i
c
 
s
l
u
g
 
e
n
d
p
o
i
n
t
 
w
o
n
'
t
 
h
a
v
e
 
a
l
l
 
f
i
e
l
d
s
 
f
o
r
 
D
R
A
F
T
 
p
o
s
t
s


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
"
/
b
l
o
g
/
a
d
m
i
n
/
p
o
s
t
s
"
,
 
{
 
p
a
r
a
m
s
:
 
{
 
p
a
g
e
:
 
1
,
 
l
i
m
i
t
:
 
1
,
 
s
e
a
r
c
h
:
 
"
"
 
}
 
}
)
;


 
 
 
 
 
 
/
/
 
F
a
l
l
b
a
c
k
:
 
f
e
t
c
h
 
a
l
l
 
a
n
d
 
f
i
n
d
 
b
y
 
i
d
.
 
I
n
 
a
 
r
e
a
l
 
a
p
p
 
t
h
e
 
a
d
m
i
n
 
d
e
t
a
i
l
 
e
n
d
p
o
i
n
t
 
w
o
u
l
d
 
b
e
 
u
s
e
d
.


 
 
 
 
 
 
/
/
 
S
i
n
c
e
 
t
h
e
 
s
p
e
c
 
o
n
l
y
 
g
i
v
e
s
 
u
s
 
l
i
s
t
 
+
 
s
l
u
g
 
e
n
d
p
o
i
n
t
s
,
 
f
e
t
c
h
 
v
i
a
 
s
l
u
g
 
o
r
 
s
e
a
r
c
h
 
t
h
e
 
l
i
s
t
.


 
 
 
 
 
 
c
o
n
s
t
 
a
l
l
R
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
"
/
b
l
o
g
/
a
d
m
i
n
/
p
o
s
t
s
"
,
 
{
 
p
a
r
a
m
s
:
 
{
 
p
a
g
e
:
 
1
,
 
l
i
m
i
t
:
 
1
0
0
 
}
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
f
o
u
n
d
 
=
 
(
a
l
l
R
e
s
.
d
a
t
a
.
p
o
s
t
s
 
a
s
 
B
l
o
g
P
o
s
t
[
]
)
.
f
i
n
d
(
(
p
)
 
=
>
 
p
.
i
d
 
=
=
=
 
N
u
m
b
e
r
(
i
d
)
)
;


 
 
 
 
 
 
i
f
 
(
!
f
o
u
n
d
)
 
t
h
r
o
w
 
n
e
w
 
E
r
r
o
r
(
"
P
o
s
t
 
n
o
t
 
f
o
u
n
d
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
p
o
s
t
:
 
f
o
u
n
d
 
}
;


 
 
 
 
}
,


 
 
 
 
e
n
a
b
l
e
d
:
 
i
s
E
d
i
t
i
n
g
,


 
 
}
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
x
i
s
t
i
n
g
P
o
s
t
?
.
p
o
s
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
e
x
i
s
t
i
n
g
P
o
s
t
.
p
o
s
t
;


 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
s
e
t
F
o
r
m
(
{


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
p
.
t
i
t
l
e
,


 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
p
.
c
o
n
t
e
n
t
,


 
 
 
 
 
 
 
 
e
x
c
e
r
p
t
:
 
p
.
e
x
c
e
r
p
t
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
:
 
p
.
c
a
t
e
g
o
r
y
,


 
 
 
 
 
 
 
 
t
a
g
s
:
 
p
.
t
a
g
s
.
j
o
i
n
(
"
,
 
"
)
,


 
 
 
 
 
 
 
 
f
e
a
t
u
r
e
d
I
m
a
g
e
:
 
p
.
f
e
a
t
u
r
e
d
I
m
a
g
e
 
?
?
 
"
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
}
,
 
[
e
x
i
s
t
i
n
g
P
o
s
t
]
)
;




 
 
c
o
n
s
t
 
p
r
e
v
i
e
w
H
t
m
l
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
r
e
n
d
e
r
P
r
e
v
i
e
w
(
f
o
r
m
.
c
o
n
t
e
n
t
)
,
 
[
f
o
r
m
.
c
o
n
t
e
n
t
]
)
;




 
 
c
o
n
s
t
 
u
p
d
a
t
e
 
=
 
(
f
i
e
l
d
:
 
k
e
y
o
f
 
P
o
s
t
F
o
r
m
,
 
v
a
l
u
e
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
e
t
F
o
r
m
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
f
i
e
l
d
]
:
 
v
a
l
u
e
 
}
)
)
;


 
 
}
;




 
 
/
/
 
S
a
v
e
 
m
u
t
a
t
i
o
n


 
 
c
o
n
s
t
 
s
a
v
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
a
s
y
n
c
 
(
p
u
b
l
i
s
h
:
 
b
o
o
l
e
a
n
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
b
o
d
y
 
=
 
{


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
f
o
r
m
.
t
i
t
l
e
,


 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
f
o
r
m
.
c
o
n
t
e
n
t
,


 
 
 
 
 
 
 
 
e
x
c
e
r
p
t
:
 
f
o
r
m
.
e
x
c
e
r
p
t
,


 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
:
 
f
o
r
m
.
c
a
t
e
g
o
r
y
,


 
 
 
 
 
 
 
 
t
a
g
s
:
 
f
o
r
m
.
t
a
g
s


 
 
 
 
 
 
 
 
 
 
.
s
p
l
i
t
(
"
,
"
)


 
 
 
 
 
 
 
 
 
 
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
)
)


 
 
 
 
 
 
 
 
 
 
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
,


 
 
 
 
 
 
 
 
f
e
a
t
u
r
e
d
I
m
a
g
e
:
 
f
o
r
m
.
f
e
a
t
u
r
e
d
I
m
a
g
e
 
|
|
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
}
;




 
 
 
 
 
 
i
f
 
(
i
s
E
d
i
t
i
n
g
)
 
{


 
 
 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
u
t
(
`
/
b
l
o
g
/
a
d
m
i
n
/
p
o
s
t
s
/
$
{
i
d
}
`
,
 
b
o
d
y
)
;


 
 
 
 
 
 
 
 
i
f
 
(
p
u
b
l
i
s
h
)
 
{


 
 
 
 
 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
a
t
c
h
(
`
/
b
l
o
g
/
a
d
m
i
n
/
p
o
s
t
s
/
$
{
i
d
}
/
p
u
b
l
i
s
h
`
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
"
/
b
l
o
g
/
a
d
m
i
n
/
p
o
s
t
s
"
,
 
b
o
d
y
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
I
d
 
=
 
r
e
s
.
d
a
t
a
.
p
o
s
t
?
.
i
d
;


 
 
 
 
 
 
 
 
i
f
 
(
p
u
b
l
i
s
h
 
&
&
 
n
e
w
I
d
)
 
{


 
 
 
 
 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
a
t
c
h
(
`
/
b
l
o
g
/
a
d
m
i
n
/
p
o
s
t
s
/
$
{
n
e
w
I
d
}
/
p
u
b
l
i
s
h
`
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
_
,
 
p
u
b
l
i
s
h
)
 
=
>
 
{


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
p
u
b
l
i
s
h
 
?
 
"
P
o
s
t
 
p
u
b
l
i
s
h
e
d
!
"
 
:
 
"
D
r
a
f
t
 
s
a
v
e
d
!
"
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
[
"
b
l
o
g
"
]
 
}
)
;


 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
"
/
a
d
m
i
n
/
b
l
o
g
"
)
;


 
 
 
 
}
,


 
 
 
 
o
n
E
r
r
o
r
:
 
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
s
a
v
e
 
p
o
s
t
"
)
,


 
 
}
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
a
v
e
D
r
a
f
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
f
o
r
m
.
t
i
t
l
e
.
t
r
i
m
(
)
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
T
i
t
l
e
 
i
s
 
r
e
q
u
i
r
e
d
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
s
a
v
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
f
a
l
s
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
P
u
b
l
i
s
h
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
f
o
r
m
.
t
i
t
l
e
.
t
r
i
m
(
)
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
T
i
t
l
e
 
i
s
 
r
e
q
u
i
r
e
d
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
i
f
 
(
!
f
o
r
m
.
c
o
n
t
e
n
t
.
t
r
i
m
(
)
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
C
o
n
t
e
n
t
 
i
s
 
r
e
q
u
i
r
e
d
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
s
a
v
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
t
r
u
e
)
;


 
 
}
;




 
 
i
f
 
(
i
s
E
d
i
t
i
n
g
 
&
&
 
l
o
a
d
i
n
g
P
o
s
t
)
 
{


 
 
 
 
r
e
t
u
r
n
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
c
o
m
p
a
c
t
 
/
>
;


 
 
}




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
B
l
o
g
 
E
d
i
t
o
r
"
 
n
o
I
n
d
e
x
 
/
>


 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
6
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
n
a
v
i
g
a
t
e
(
"
/
a
d
m
i
n
/
b
l
o
g
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
-
2
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
E
d
i
t
i
n
g
 
?
 
"
E
d
i
t
 
P
o
s
t
"
 
:
 
"
N
e
w
 
P
o
s
t
"
}


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
S
a
v
e
D
r
a
f
t
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
a
v
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
b
g
-
g
r
a
y
-
8
0
0
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
v
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
a
v
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
S
a
v
e
 
D
r
a
f
t


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
P
u
b
l
i
s
h
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
a
v
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
b
g
-
b
l
u
e
-
6
0
0
 
h
o
v
e
r
:
b
g
-
b
l
u
e
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
x
l
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
v
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
l
o
b
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
P
u
b
l
i
s
h


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
5
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
T
i
t
l
e
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
.
5
"
>
T
i
t
l
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
(
"
t
i
t
l
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
E
n
t
e
r
 
p
o
s
t
 
t
i
t
l
e
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
C
a
t
e
g
o
r
y
 
+
 
T
a
g
s
 
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
.
5
"
>
C
a
t
e
g
o
r
y
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
(
"
c
a
t
e
g
o
r
y
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
w
h
i
t
e
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
O
P
T
I
O
N
S
.
m
a
p
(
(
o
p
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
o
p
t
.
v
a
l
u
e
}
 
v
a
l
u
e
=
{
o
p
t
.
v
a
l
u
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
.
5
"
>
T
a
g
s
 
(
c
o
m
m
a
-
s
e
p
a
r
a
t
e
d
)
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
t
a
g
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
(
"
t
a
g
s
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
r
e
a
c
t
,
 
t
y
p
e
s
c
r
i
p
t
,
 
c
a
r
e
e
r
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
E
x
c
e
r
p
t
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
.
5
"
>
E
x
c
e
r
p
t
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
e
x
c
e
r
p
t
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
(
"
e
x
c
e
r
p
t
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
B
r
i
e
f
 
s
u
m
m
a
r
y
 
o
f
 
t
h
e
 
p
o
s
t
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
r
e
s
i
z
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
F
e
a
t
u
r
e
d
 
i
m
a
g
e
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
.
5
"
>
F
e
a
t
u
r
e
d
 
I
m
a
g
e
 
U
R
L
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
f
e
a
t
u
r
e
d
I
m
a
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
(
"
f
e
a
t
u
r
e
d
I
m
a
g
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
h
t
t
p
s
:
/
/
e
x
a
m
p
l
e
.
c
o
m
/
i
m
a
g
e
.
j
p
g
"


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
e
n
t
:
 
s
p
l
i
t
 
v
i
e
w
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
C
o
n
t
e
n
t
 
(
M
a
r
k
d
o
w
n
)
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
l
g
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
P
r
e
v
i
e
w
M
o
d
e
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
!
p
r
e
v
i
e
w
M
o
d
e
 
?
 
"
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
"
 
:
 
"
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
e
n
c
i
l
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
r
i
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
P
r
e
v
i
e
w
M
o
d
e
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
v
i
e
w
M
o
d
e
 
?
 
"
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
"
 
:
 
"
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
y
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
l
g
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
{
p
r
e
v
i
e
w
M
o
d
e
 
?
 
"
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
 
:
 
"
"
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
o
n
t
e
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
(
"
c
o
n
t
e
n
t
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
W
r
i
t
e
 
y
o
u
r
 
p
o
s
t
 
i
n
 
M
a
r
k
d
o
w
n
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
u
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
r
e
s
i
z
e
-
y
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
e
v
i
e
w
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
{
!
p
r
e
v
i
e
w
M
o
d
e
 
?
 
"
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
 
:
 
"
"
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
5
 
m
i
n
-
h
-
[
5
7
6
p
x
]
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
.
c
o
n
t
e
n
t
.
t
r
i
m
(
)
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
d
a
n
g
e
r
o
u
s
l
y
S
e
t
I
n
n
e
r
H
T
M
L
=
{
{
 
_
_
h
t
m
l
:
 
p
r
e
v
i
e
w
H
t
m
l
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
w
r
i
t
i
n
g
 
t
o
 
s
e
e
 
a
 
p
r
e
v
i
e
w
.
.
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


