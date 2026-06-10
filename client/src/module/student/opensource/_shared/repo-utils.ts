
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
 
O
p
e
n
S
o
u
r
c
e
R
e
p
o
 
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
.
.
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




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
C
o
u
n
t
(
n
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
n
 
>
=
 
1
0
0
0
)
 
r
e
t
u
r
n
 
`
$
{
(
n
 
/
 
1
0
0
0
)
.
t
o
F
i
x
e
d
(
1
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
\
.
0
$
/
,
 
"
"
)
}
k
`
;


 
 
r
e
t
u
r
n
 
S
t
r
i
n
g
(
n
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
d
i
f
f
i
c
u
l
t
y
B
a
d
g
e
(
d
:
 
O
p
e
n
S
o
u
r
c
e
R
e
p
o
[
"
d
i
f
f
i
c
u
l
t
y
"
]
)
 
{


 
 
c
o
n
s
t
 
m
a
p
 
=
 
{


 
 
 
 
B
E
G
I
N
N
E
R
:
 
{


 
 
 
 
 
 
l
a
b
e
l
:
 
"
B
e
g
i
n
n
e
r
"
,


 
 
 
 
 
 
c
l
s
:
 
"
b
g
-
e
m
e
r
a
l
d
-
5
0
 
t
e
x
t
-
e
m
e
r
a
l
d
-
7
0
0
 
r
i
n
g
-
e
m
e
r
a
l
d
-
2
0
0
 
d
a
r
k
:
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
 
d
a
r
k
:
r
i
n
g
-
e
m
e
r
a
l
d
-
7
0
0
"
,


 
 
 
 
}
,


 
 
 
 
I
N
T
E
R
M
E
D
I
A
T
E
:
 
{


 
 
 
 
 
 
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
m
e
d
i
a
t
e
"
,


 
 
 
 
 
 
c
l
s
:
 
"
b
g
-
a
m
b
e
r
-
5
0
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
r
i
n
g
-
a
m
b
e
r
-
2
0
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
d
a
r
k
:
r
i
n
g
-
a
m
b
e
r
-
7
0
0
"
,


 
 
 
 
}
,


 
 
 
 
A
D
V
A
N
C
E
D
:
 
{


 
 
 
 
 
 
l
a
b
e
l
:
 
"
A
d
v
a
n
c
e
d
"
,


 
 
 
 
 
 
c
l
s
:
 
"
b
g
-
r
o
s
e
-
5
0
 
t
e
x
t
-
r
o
s
e
-
7
0
0
 
r
i
n
g
-
r
o
s
e
-
2
0
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
r
o
s
e
-
4
0
0
 
d
a
r
k
:
r
i
n
g
-
r
o
s
e
-
7
0
0
"
,


 
 
 
 
}
,


 
 
}
;


 
 
r
e
t
u
r
n
 
m
a
p
[
d
]
;


}




/
/
 
P
a
r
s
e
s
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
<
o
w
n
e
r
>
/
<
r
e
p
o
>
"
 
(
t
r
a
i
l
i
n
g
 
s
l
a
s
h
,
 
.
g
i
t
 
s
u
f
f
i
x
,
 
o
r


/
/
 
e
x
t
r
a
 
p
a
t
h
 
s
e
g
m
e
n
t
s
 
a
l
l
o
w
e
d
)
.
 
R
e
t
u
r
n
s
 
n
u
l
l
 
i
f
 
t
h
e
 
i
n
p
u
t
 
i
s
n
'
t
 
a
 
v
a
l
i
d


/
/
 
G
i
t
H
u
b
 
r
e
p
o
 
U
R
L
.
 
E
n
f
o
r
c
e
s
 
h
t
t
p
s
 
s
o
 
w
e
 
d
o
n
'
t
 
a
c
c
e
p
t
 
a
r
b
i
t
r
a
r
y
 
U
R
L
s
.


e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
p
a
r
s
e
G
i
t
h
u
b
R
e
p
o
U
r
l
(
r
a
w
:
 
s
t
r
i
n
g
)
:
 
{
 
o
w
n
e
r
:
 
s
t
r
i
n
g
;
 
n
a
m
e
:
 
s
t
r
i
n
g
 
}
 
|
 
n
u
l
l
 
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
 
r
a
w
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
 
n
u
l
l
;




 
 
/
/
 
S
u
p
p
o
r
t
 
S
S
H
 
f
o
r
m
a
t
:
 
g
i
t
@
g
i
t
h
u
b
.
c
o
m
:
o
w
n
e
r
/
r
e
p
o
.
g
i
t


 
 
c
o
n
s
t
 
s
s
h
M
a
t
c
h
 
=
 
t
r
i
m
m
e
d
.
m
a
t
c
h
(
/
^
g
i
t
@
g
i
t
h
u
b
\
.
c
o
m
:
(
.
+
)
$
/
)
;


 
 
i
f
 
(
s
s
h
M
a
t
c
h
)
 
{


 
 
 
 
c
o
n
s
t
 
s
e
g
m
e
n
t
s
 
=
 
s
s
h
M
a
t
c
h
[
1
]
.
s
p
l
i
t
(
"
/
"
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
;


 
 
 
 
i
f
 
(
s
e
g
m
e
n
t
s
.
l
e
n
g
t
h
 
<
 
2
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
c
o
n
s
t
 
[
o
w
n
e
r
,
 
r
a
w
N
a
m
e
]
 
=
 
s
e
g
m
e
n
t
s
;


 
 
 
 
c
o
n
s
t
 
n
a
m
e
 
=
 
r
a
w
N
a
m
e
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
.
g
i
t
$
/
i
,
 
"
"
)
;


 
 
 
 
c
o
n
s
t
 
n
a
m
e
R
e
 
=
 
/
^
[
A
-
Z
a
-
z
0
-
9
.
_
-
]
+
$
/
;


 
 
 
 
i
f
 
(
!
n
a
m
e
R
e
.
t
e
s
t
(
o
w
n
e
r
)
 
|
|
 
!
n
a
m
e
R
e
.
t
e
s
t
(
n
a
m
e
)
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
r
e
t
u
r
n
 
{
 
o
w
n
e
r
,
 
n
a
m
e
 
}
;


 
 
}




 
 
l
e
t
 
u
r
l
:
 
U
R
L
;


 
 
t
r
y
 
{


 
 
 
 
u
r
l
 
=
 
n
e
w
 
U
R
L
(
t
r
i
m
m
e
d
)
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
}


 
 
i
f
 
(
u
r
l
.
p
r
o
t
o
c
o
l
 
!
=
=
 
"
h
t
t
p
s
:
"
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
i
f
 
(
u
r
l
.
h
o
s
t
n
a
m
e
 
!
=
=
 
"
g
i
t
h
u
b
.
c
o
m
"
 
&
&
 
u
r
l
.
h
o
s
t
n
a
m
e
 
!
=
=
 
"
w
w
w
.
g
i
t
h
u
b
.
c
o
m
"
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
s
e
g
m
e
n
t
s
 
=
 
u
r
l
.
p
a
t
h
n
a
m
e
.
s
p
l
i
t
(
"
/
"
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
;


 
 
i
f
 
(
s
e
g
m
e
n
t
s
.
l
e
n
g
t
h
 
<
 
2
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
[
o
w
n
e
r
,
 
r
a
w
N
a
m
e
]
 
=
 
s
e
g
m
e
n
t
s
;


 
 
c
o
n
s
t
 
n
a
m
e
 
=
 
r
a
w
N
a
m
e
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
.
g
i
t
$
/
i
,
 
"
"
)
;


 
 
c
o
n
s
t
 
n
a
m
e
R
e
 
=
 
/
^
[
A
-
Z
a
-
z
0
-
9
.
_
-
]
+
$
/
;


 
 
i
f
 
(
!
n
a
m
e
R
e
.
t
e
s
t
(
o
w
n
e
r
)
 
|
|
 
!
n
a
m
e
R
e
.
t
e
s
t
(
n
a
m
e
)
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
{
 
o
w
n
e
r
,
 
n
a
m
e
 
}
;


}


