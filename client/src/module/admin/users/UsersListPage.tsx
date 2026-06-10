
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
S
t
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
i
n
k
 
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
 
S
e
a
r
c
h
 
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
 
{
 
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s
 
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
u
i
/
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s
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
 
t
y
p
e
 
{
 
A
d
m
i
n
U
s
e
r
,
 
P
a
g
i
n
a
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
 
U
s
e
r
s
L
i
s
t
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
u
s
e
r
s
,
 
s
e
t
U
s
e
r
s
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
A
d
m
i
n
U
s
e
r
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
p
a
g
i
n
a
t
i
o
n
,
 
s
e
t
P
a
g
i
n
a
t
i
o
n
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
a
g
i
n
a
t
i
o
n
>
(
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
 
2
0
,
 
t
o
t
a
l
:
 
0
,
 
t
o
t
a
l
P
a
g
e
s
:
 
0
 
}
)
;


 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
"
"
)
;


 
 
c
o
n
s
t
 
[
r
o
l
e
F
i
l
t
e
r
,
 
s
e
t
R
o
l
e
F
i
l
t
e
r
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
"
"
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
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
t
r
u
e
)
;




 
 
c
o
n
s
t
 
f
e
t
c
h
U
s
e
r
s
 
=
 
a
s
y
n
c
 
(
p
a
g
e
 
=
 
1
)
 
=
>
 
{


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
>
 
=
 
{
 
p
a
g
e
,
 
l
i
m
i
t
:
 
2
0
 
}
;


 
 
 
 
 
 
i
f
 
(
s
e
a
r
c
h
)
 
p
a
r
a
m
s
.
s
e
a
r
c
h
 
=
 
s
e
a
r
c
h
;


 
 
 
 
 
 
i
f
 
(
r
o
l
e
F
i
l
t
e
r
)
 
p
a
r
a
m
s
.
r
o
l
e
 
=
 
r
o
l
e
F
i
l
t
e
r
;


 
 
 
 
 
 
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
 
}
 
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
a
d
m
i
n
/
u
s
e
r
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
 
}
)
;


 
 
 
 
 
 
s
e
t
U
s
e
r
s
(
d
a
t
a
.
u
s
e
r
s
)
;


 
 
 
 
 
 
s
e
t
P
a
g
i
n
a
t
i
o
n
(
d
a
t
a
.
p
a
g
i
n
a
t
i
o
n
)
;


 
 
 
 
}
 
c
a
t
c
h
 
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
F
a
i
l
e
d
 
t
o
 
l
o
a
d
 
u
s
e
r
s
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
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
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s
,
 
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
 
f
e
t
c
h
U
s
e
r
s
(
)
;
 
}
,
 
[
r
o
l
e
F
i
l
t
e
r
]
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
e
a
r
c
h
 
=
 
(
e
:
 
R
e
a
c
t
.
F
o
r
m
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
f
e
t
c
h
U
s
e
r
s
(
1
)
;


 
 
}
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
U
s
e
r
S
t
a
t
u
s
 
=
 
a
s
y
n
c
 
(
u
s
e
r
I
d
:
 
n
u
m
b
e
r
,
 
c
u
r
r
e
n
t
S
t
a
t
u
s
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


 
 
 
 
t
r
y
 
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
a
d
m
i
n
/
u
s
e
r
s
/
$
{
u
s
e
r
I
d
}
/
s
t
a
t
u
s
`
,
 
{
 
i
s
A
c
t
i
v
e
:
 
!
c
u
r
r
e
n
t
S
t
a
t
u
s
 
}
)
;


 
 
 
 
 
 
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
`
U
s
e
r
 
$
{
c
u
r
r
e
n
t
S
t
a
t
u
s
 
?
 
"
d
e
a
c
t
i
v
a
t
e
d
"
 
:
 
"
a
c
t
i
v
a
t
e
d
"
}
`
)
;


 
 
 
 
 
 
f
e
t
c
h
U
s
e
r
s
(
p
a
g
i
n
a
t
i
o
n
.
p
a
g
e
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
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
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
u
s
e
r
"
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
d
e
l
e
t
e
U
s
e
r
 
=
 
a
s
y
n
c
 
(
u
s
e
r
I
d
:
 
n
u
m
b
e
r
,
 
u
s
e
r
N
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
c
o
n
f
i
r
m
(
`
A
r
e
 
y
o
u
 
s
u
r
e
 
y
o
u
 
w
a
n
t
 
t
o
 
d
e
l
e
t
e
 
$
{
u
s
e
r
N
a
m
e
}
?
 
T
h
i
s
 
c
a
n
n
o
t
 
b
e
 
u
n
d
o
n
e
.
`
)
)
 
r
e
t
u
r
n
;


 
 
 
 
t
r
y
 
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
d
e
l
e
t
e
(
`
/
a
d
m
i
n
/
u
s
e
r
s
/
$
{
u
s
e
r
I
d
}
`
)
;


 
 
 
 
 
 
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
"
U
s
e
r
 
d
e
l
e
t
e
d
"
)
;


 
 
 
 
 
 
f
e
t
c
h
U
s
e
r
s
(
p
a
g
i
n
a
t
i
o
n
.
p
a
g
e
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
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
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
d
e
l
e
t
e
 
u
s
e
r
"
)
;


 
 
 
 
}


 
 
}
;




 
 
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
M
a
n
a
g
e
 
U
s
e
r
s
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
 
m
b
-
6
"
>
U
s
e
r
 
M
a
n
a
g
e
m
e
n
t
<
/
h
1
>




 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
s
 
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
 
f
l
e
x
-
c
o
l
 
s
m
:
f
l
e
x
-
r
o
w
 
g
a
p
-
3
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
<
f
o
r
m
 
o
n
S
u
b
m
i
t
=
{
h
a
n
d
l
e
S
e
a
r
c
h
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
-
1
 
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
3
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
4
 
h
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
"
 
/
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
s
e
a
r
c
h
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
 
s
e
t
S
e
a
r
c
h
(
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
S
e
a
r
c
h
 
b
y
 
n
a
m
e
 
o
r
 
e
m
a
i
l
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
l
-
1
0
 
p
r
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
i
n
d
i
g
o
-
5
0
0
/
5
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
i
n
d
i
g
o
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
f
o
r
m
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
r
o
l
e
F
i
l
t
e
r
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
 
s
e
t
R
o
l
e
F
i
l
t
e
r
(
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
i
n
d
i
g
o
-
5
0
0
/
5
0
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
"
>
A
l
l
 
R
o
l
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
S
T
U
D
E
N
T
"
>
S
t
u
d
e
n
t
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
R
E
C
R
U
I
T
E
R
"
>
R
e
c
r
u
i
t
e
r
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
D
M
I
N
"
>
A
d
m
i
n
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
T
a
b
l
e
 
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
8
0
0
 
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


 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
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
p
-
8
 
t
e
x
t
-
c
e
n
t
e
r
 
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
"
>
L
o
a
d
i
n
g
 
u
s
e
r
s
.
.
.
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
u
s
e
r
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
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
p
-
8
 
t
e
x
t
-
c
e
n
t
e
r
 
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
"
>
N
o
 
u
s
e
r
s
 
f
o
u
n
d
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
a
b
l
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
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
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
o
r
d
e
r
-
b
 
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
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
l
e
f
t
 
p
x
-
6
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
"
>
N
a
m
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
l
e
f
t
 
p
x
-
6
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
"
>
E
m
a
i
l
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
l
e
f
t
 
p
x
-
6
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
"
>
R
o
l
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
l
e
f
t
 
p
x
-
6
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
"
>
S
t
a
t
u
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
l
e
f
t
 
p
x
-
6
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
"
>
J
o
i
n
e
d
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
r
i
g
h
t
 
p
x
-
6
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
"
>
A
c
t
i
o
n
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
 
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
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
s
.
m
a
p
(
(
u
s
e
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
t
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
u
s
e
r
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
i
 
*
 
0
.
0
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
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
`
/
a
d
m
i
n
/
u
s
e
r
s
/
$
{
u
s
e
r
.
i
d
}
`
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
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
 
n
o
-
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
 
t
e
x
t
-
s
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
4
0
0
"
>
{
u
s
e
r
.
e
m
a
i
l
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
 
$
{
g
e
t
R
o
l
e
B
a
d
g
e
(
u
s
e
r
.
r
o
l
e
)
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
r
o
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
 
$
{
u
s
e
r
.
i
s
A
c
t
i
v
e
 
?
 
"
b
g
-
g
r
e
e
n
-
9
0
0
/
5
0
 
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
 
:
 
"
b
g
-
r
e
d
-
9
0
0
/
5
0
 
t
e
x
t
-
r
e
d
-
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
i
s
A
c
t
i
v
e
 
?
 
"
A
c
t
i
v
e
"
 
:
 
"
I
n
a
c
t
i
v
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
 
t
e
x
t
-
s
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
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
w
 
D
a
t
e
(
u
s
e
r
.
c
r
e
a
t
e
d
A
t
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
 
t
e
x
t
-
r
i
g
h
t
 
s
p
a
c
e
-
x
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
(
)
 
=
>
 
t
o
g
g
l
e
U
s
e
r
S
t
a
t
u
s
(
u
s
e
r
.
i
d
,
 
u
s
e
r
.
i
s
A
c
t
i
v
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
p
x
-
3
 
p
y
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
s
e
r
.
i
s
A
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
y
e
l
l
o
w
-
9
0
0
/
3
0
 
t
e
x
t
-
y
e
l
l
o
w
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
b
g
-
y
e
l
l
o
w
-
9
0
0
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
g
r
e
e
n
-
9
0
0
/
3
0
 
t
e
x
t
-
g
r
e
e
n
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
b
g
-
g
r
e
e
n
-
9
0
0
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
i
s
A
c
t
i
v
e
 
?
 
"
D
e
a
c
t
i
v
a
t
e
"
 
:
 
"
A
c
t
i
v
a
t
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
d
e
l
e
t
e
U
s
e
r
(
u
s
e
r
.
i
d
,
 
u
s
e
r
.
n
a
m
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
p
x
-
3
 
p
y
-
1
 
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
 
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
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
b
g
-
r
e
d
-
9
0
0
/
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
e
l
e
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
/
t
d
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
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
P
a
g
i
n
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
<
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s


 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
P
a
g
e
=
{
p
a
g
i
n
a
t
i
o
n
.
p
a
g
e
}


 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
P
a
g
e
s
=
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
}


 
 
 
 
 
 
 
 
 
 
o
n
P
a
g
e
C
h
a
n
g
e
=
{
f
e
t
c
h
U
s
e
r
s
}


 
 
 
 
 
 
 
 
 
 
s
h
o
w
i
n
g
I
n
f
o
=
{
{
 
t
o
t
a
l
:
 
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
,
 
l
i
m
i
t
:
 
p
a
g
i
n
a
t
i
o
n
.
l
i
m
i
t
 
}
}


 
 
 
 
 
 
 
 
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


 
 
)
;


}




f
u
n
c
t
i
o
n
 
g
e
t
R
o
l
e
B
a
d
g
e
(
r
o
l
e
:
 
s
t
r
i
n
g
)
 
{


 
 
s
w
i
t
c
h
 
(
r
o
l
e
)
 
{


 
 
 
 
c
a
s
e
 
"
S
T
U
D
E
N
T
"
:
 
r
e
t
u
r
n
 
"
b
g
-
b
l
u
e
-
9
0
0
/
5
0
 
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
"
;


 
 
 
 
c
a
s
e
 
"
R
E
C
R
U
I
T
E
R
"
:
 
r
e
t
u
r
n
 
"
b
g
-
p
u
r
p
l
e
-
9
0
0
/
5
0
 
t
e
x
t
-
p
u
r
p
l
e
-
4
0
0
"
;


 
 
 
 
c
a
s
e
 
"
A
D
M
I
N
"
:
 
r
e
t
u
r
n
 
"
b
g
-
r
e
d
-
9
0
0
/
5
0
 
t
e
x
t
-
r
e
d
-
4
0
0
"
;


 
 
 
 
d
e
f
a
u
l
t
:
 
r
e
t
u
r
n
 
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
"
;


 
 
}


}


