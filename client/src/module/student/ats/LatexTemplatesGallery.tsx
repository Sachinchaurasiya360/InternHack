
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
R
e
f
 
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
 
C
o
d
e
2
,
 
F
i
l
e
C
o
d
e
2
,
 
L
o
a
d
e
r
2
 
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


i
m
p
o
r
t
 
A
t
s
T
o
o
l
s
N
a
v
 
f
r
o
m
 
"
.
/
A
t
s
T
o
o
l
s
N
a
v
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
 
{
 
L
A
T
E
X
_
T
E
M
P
L
A
T
E
S
,
 
t
y
p
e
 
L
a
t
e
x
T
e
m
p
l
a
t
e
 
}
 
f
r
o
m
 
"
.
/
l
a
t
e
x
-
t
e
m
p
l
a
t
e
s
.
d
a
t
a
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
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
b
u
t
t
o
n
"
;




c
o
n
s
t
 
C
A
C
H
E
_
V
E
R
S
I
O
N
 
=
 
"
v
3
"
;


c
o
n
s
t
 
C
A
C
H
E
_
P
R
E
F
I
X
 
=
 
`
l
a
t
e
x
-
t
p
l
-
p
d
f
-
$
{
C
A
C
H
E
_
V
E
R
S
I
O
N
}
-
`
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
I
E
S
 
=
 
[


 
 
{
 
l
a
b
e
l
:
 
"
A
l
l
"
,
 
v
a
l
u
e
:
 
"
a
l
l
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
P
r
o
f
e
s
s
i
o
n
a
l
"
,
 
v
a
l
u
e
:
 
"
p
r
o
f
e
s
s
i
o
n
a
l
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
A
c
a
d
e
m
i
c
"
,
 
v
a
l
u
e
:
 
"
a
c
a
d
e
m
i
c
"
 
}
,


 
 
{
 
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
n
i
c
a
l
"
,
 
v
a
l
u
e
:
 
"
t
e
c
h
n
i
c
a
l
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
C
r
e
a
t
i
v
e
"
,
 
v
a
l
u
e
:
 
"
c
r
e
a
t
i
v
e
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
M
i
n
i
m
a
l
"
,
 
v
a
l
u
e
:
 
"
m
i
n
i
m
a
l
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
E
x
e
c
u
t
i
v
e
"
,
 
v
a
l
u
e
:
 
"
e
x
e
c
u
t
i
v
e
"
 
}
,


]
 
a
s
 
c
o
n
s
t
;




/
/
 
C
o
n
v
e
r
t
 
b
l
o
b
 
t
o
 
b
a
s
e
6
4
 
f
o
r
 
l
o
c
a
l
S
t
o
r
a
g
e
 
c
a
c
h
i
n
g


f
u
n
c
t
i
o
n
 
b
l
o
b
T
o
B
a
s
e
6
4
(
b
l
o
b
:
 
B
l
o
b
)
:
 
P
r
o
m
i
s
e
<
s
t
r
i
n
g
>
 
{


 
 
r
e
t
u
r
n
 
n
e
w
 
P
r
o
m
i
s
e
(
(
r
e
s
o
l
v
e
,
 
r
e
j
e
c
t
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
r
e
a
d
e
r
 
=
 
n
e
w
 
F
i
l
e
R
e
a
d
e
r
(
)
;


 
 
 
 
r
e
a
d
e
r
.
o
n
l
o
a
d
e
n
d
 
=
 
(
)
 
=
>
 
r
e
s
o
l
v
e
(
r
e
a
d
e
r
.
r
e
s
u
l
t
 
a
s
 
s
t
r
i
n
g
)
;


 
 
 
 
r
e
a
d
e
r
.
o
n
e
r
r
o
r
 
=
 
r
e
j
e
c
t
;


 
 
 
 
r
e
a
d
e
r
.
r
e
a
d
A
s
D
a
t
a
U
R
L
(
b
l
o
b
)
;


 
 
}
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
 
b
a
s
e
6
4
T
o
B
l
o
b
(
b
a
s
e
6
4
:
 
s
t
r
i
n
g
)
:
 
B
l
o
b
 
{


 
 
c
o
n
s
t
 
[
m
e
t
a
,
 
d
a
t
a
]
 
=
 
b
a
s
e
6
4
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
;


 
 
c
o
n
s
t
 
m
i
m
e
 
=
 
m
e
t
a
.
m
a
t
c
h
(
/
:
(
.
*
?
)
;
/
)
?
.
[
1
]
 
?
?
 
"
a
p
p
l
i
c
a
t
i
o
n
/
p
d
f
"
;


 
 
c
o
n
s
t
 
b
y
t
e
s
 
=
 
a
t
o
b
(
d
a
t
a
)
;


 
 
c
o
n
s
t
 
a
r
r
 
=
 
n
e
w
 
U
i
n
t
8
A
r
r
a
y
(
b
y
t
e
s
.
l
e
n
g
t
h
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
b
y
t
e
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
a
r
r
[
i
]
 
=
 
b
y
t
e
s
.
c
h
a
r
C
o
d
e
A
t
(
i
)
;


 
 
r
e
t
u
r
n
 
n
e
w
 
B
l
o
b
(
[
a
r
r
]
,
 
{
 
t
y
p
e
:
 
m
i
m
e
 
}
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
 
T
e
m
p
l
a
t
e
C
a
r
d
(
{
 
t
e
m
p
l
a
t
e
,
 
i
n
d
e
x
 
}
:
 
{
 
t
e
m
p
l
a
t
e
:
 
L
a
t
e
x
T
e
m
p
l
a
t
e
;
 
i
n
d
e
x
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
[
p
d
f
U
r
l
,
 
s
e
t
P
d
f
U
r
l
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
s
t
r
i
n
g
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
c
o
m
p
i
l
i
n
g
,
 
s
e
t
C
o
m
p
i
l
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
b
l
o
b
U
r
l
R
e
f
 
=
 
u
s
e
R
e
f
<
s
t
r
i
n
g
 
|
 
n
u
l
l
>
(
n
u
l
l
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


 
 
 
 
l
e
t
 
c
a
n
c
e
l
l
e
d
 
=
 
f
a
l
s
e
;




 
 
 
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
l
o
a
d
P
r
e
v
i
e
w
(
)
 
{


 
 
 
 
 
 
/
/
 
C
h
e
c
k
 
l
o
c
a
l
S
t
o
r
a
g
e
 
c
a
c
h
e
 
f
i
r
s
t


 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
a
c
h
e
d
 
=
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
C
A
C
H
E
_
P
R
E
F
I
X
 
+
 
t
e
m
p
l
a
t
e
.
i
d
)
;


 
 
 
 
 
 
 
 
i
f
 
(
c
a
c
h
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
l
o
b
 
=
 
b
a
s
e
6
4
T
o
B
l
o
b
(
c
a
c
h
e
d
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
b
l
o
b
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
c
e
l
l
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
b
l
o
b
U
r
l
R
e
f
.
c
u
r
r
e
n
t
 
=
 
u
r
l
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
d
f
U
r
l
(
u
r
l
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
c
a
t
c
h
 
{
 
/
*
 
c
a
c
h
e
 
m
i
s
s
 
*
/
 
}




 
 
 
 
 
 
/
/
 
C
o
m
p
i
l
e
 
v
i
a
 
A
P
I


 
 
 
 
 
 
s
e
t
C
o
m
p
i
l
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
l
a
t
e
x
/
c
o
m
p
i
l
e
"
,


 
 
 
 
 
 
 
 
 
 
{
 
s
o
u
r
c
e
:
 
t
e
m
p
l
a
t
e
.
s
o
u
r
c
e
,
 
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
:
 
t
e
m
p
l
a
t
e
.
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
r
e
s
p
o
n
s
e
T
y
p
e
:
 
"
b
l
o
b
"
 
}
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
l
o
b
 
=
 
r
e
s
.
d
a
t
a
 
a
s
 
B
l
o
b
;


 
 
 
 
 
 
 
 
i
f
 
(
c
a
n
c
e
l
l
e
d
)
 
r
e
t
u
r
n
;




 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
b
l
o
b
)
;


 
 
 
 
 
 
 
 
b
l
o
b
U
r
l
R
e
f
.
c
u
r
r
e
n
t
 
=
 
u
r
l
;


 
 
 
 
 
 
 
 
s
e
t
P
d
f
U
r
l
(
u
r
l
)
;




 
 
 
 
 
 
 
 
/
/
 
C
a
c
h
e
 
t
o
 
l
o
c
a
l
S
t
o
r
a
g
e


 
 
 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
6
4
 
=
 
a
w
a
i
t
 
b
l
o
b
T
o
B
a
s
e
6
4
(
b
l
o
b
)
;


 
 
 
 
 
 
 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
C
A
C
H
E
_
P
R
E
F
I
X
 
+
 
t
e
m
p
l
a
t
e
.
i
d
,
 
b
6
4
)
;


 
 
 
 
 
 
 
 
}
 
c
a
t
c
h
 
{
 
/
*
 
s
t
o
r
a
g
e
 
f
u
l
l
 
-
 
s
k
i
p
 
c
a
c
h
i
n
g
 
*
/
 
}


 
 
 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
 
 
/
/
 
C
o
m
p
i
l
a
t
i
o
n
 
f
a
i
l
e
d
 
-
 
s
h
o
w
 
t
e
x
t
 
f
a
l
l
b
a
c
k


 
 
 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
c
e
l
l
e
d
)
 
s
e
t
C
o
m
p
i
l
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




 
 
 
 
l
o
a
d
P
r
e
v
i
e
w
(
)
;




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
a
n
c
e
l
l
e
d
 
=
 
t
r
u
e
;


 
 
 
 
 
 
i
f
 
(
b
l
o
b
U
r
l
R
e
f
.
c
u
r
r
e
n
t
)
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
b
l
o
b
U
r
l
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
}
;


 
 
}
,
 
[
t
e
m
p
l
a
t
e
.
i
d
,
 
t
e
m
p
l
a
t
e
.
s
o
u
r
c
e
,
 
t
e
m
p
l
a
t
e
.
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
 
2
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
4
,
 
d
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
8
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
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
b
g
-
w
h
i
t
e
 
d
a
r
k
:
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
2
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
1
0
0
 
d
a
r
k
:
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
 
s
h
a
d
o
w
-
s
m
 
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
 
g
r
o
u
p
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
g
 
h
o
v
e
r
:
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
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
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
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
"


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
P
D
F
 
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
"
a
s
p
e
c
t
-
[
8
.
5
/
1
1
]
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
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


 
 
 
 
 
 
 
 
{
p
d
f
U
r
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
i
f
r
a
m
e


 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
`
$
{
p
d
f
U
r
l
}
#
t
o
o
l
b
a
r
=
0
&
n
a
v
p
a
n
e
s
=
0
&
s
c
r
o
l
l
b
a
r
=
0
&
v
i
e
w
=
F
i
t
H
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
w
-
f
u
l
l
 
h
-
f
u
l
l
 
b
o
r
d
e
r
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
$
{
t
e
m
p
l
a
t
e
.
n
a
m
e
}
 
p
r
e
v
i
e
w
`
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
c
o
m
p
i
l
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
6
 
h
-
6
 
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
"
t
e
x
t
-
x
s
 
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
C
o
m
p
i
l
i
n
g
 
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
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
h
i
d
d
e
n
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
[
9
p
x
]
 
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
g
r
a
y
-
5
0
0
 
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
m
p
l
a
t
e
.
p
r
e
v
i
e
w
L
i
n
e
s
.
m
a
p
(
(
l
i
n
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
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
l
i
n
e
 
=
=
=
 
"
"
 
?
 
"
h
-
2
"
 
:
 
"
"
}
>
{
l
i
n
e
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
/
*
 
H
o
v
e
r
 
o
v
e
r
l
a
y
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
c
e
n
t
e
r
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
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
o
p
a
c
i
t
y
 
d
u
r
a
t
i
o
n
-
2
0
0
 
b
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
 
s
i
z
e
=
"
m
d
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
g
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
7
0
0
 
s
h
a
d
o
w
-
l
g
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
s
t
u
d
e
n
t
/
a
t
s
/
l
a
t
e
x
-
e
d
i
t
o
r
?
t
e
m
p
l
a
t
e
=
$
{
t
e
m
p
l
a
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
s
e
 
T
e
m
p
l
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
<
/
B
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




 
 
 
 
 
 
{
/
*
 
C
a
r
d
 
f
o
o
t
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
p
-
4
 
b
o
r
d
e
r
-
t
 
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
1
0
0
 
d
a
r
k
:
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
C
o
d
e
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
3
.
5
 
h
-
3
.
5
 
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
5
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
b
o
l
d
 
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
9
0
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
w
h
i
t
e
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
m
p
l
a
t
e
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
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
x
s
 
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
g
r
a
y
-
4
0
0
 
m
b
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
t
e
m
p
l
a
t
e
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
<
/
p
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
1
.
5
 
f
l
e
x
-
w
r
a
p
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
t
e
m
p
l
a
t
e
.
t
a
g
s
.
m
a
p
(
(
t
a
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
a
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
t
e
x
t
-
[
1
0
p
x
]
 
b
g
-
g
r
a
y
-
1
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
5
0
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
g
r
a
y
-
4
0
0
 
p
x
-
2
 
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
-
l
g
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"
 
s
i
z
e
=
"
m
d
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
s
t
u
d
e
n
t
/
a
t
s
/
l
a
t
e
x
-
e
d
i
t
o
r
?
t
e
m
p
l
a
t
e
=
$
{
t
e
m
p
l
a
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
U
s
e
 
T
e
m
p
l
a
t
e


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
<
/
B
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


 
 
)
;


}




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
 
L
a
t
e
x
T
e
m
p
l
a
t
e
s
G
a
l
l
e
r
y
(
)
 
{


 
 
c
o
n
s
t
 
[
c
a
t
e
g
o
r
y
,
 
s
e
t
C
a
t
e
g
o
r
y
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
a
l
l
"
)
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
=


 
 
 
 
c
a
t
e
g
o
r
y
 
=
=
=
 
"
a
l
l
"


 
 
 
 
 
 
?
 
L
A
T
E
X
_
T
E
M
P
L
A
T
E
S


 
 
 
 
 
 
:
 
L
A
T
E
X
_
T
E
M
P
L
A
T
E
S
.
f
i
l
t
e
r
(
(
t
)
 
=
>
 
t
.
c
a
t
e
g
o
r
y
 
=
=
=
 
c
a
t
e
g
o
r
y
)
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
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
3
6
0
 
m
x
-
a
u
t
o
 
p
b
-
1
2
"
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
L
a
T
e
X
 
R
e
s
u
m
e
 
T
e
m
p
l
a
t
e
s
"
 
d
e
s
c
r
i
p
t
i
o
n
=
"
B
r
o
w
s
e
 
p
r
o
f
e
s
s
i
o
n
a
l
 
L
a
T
e
X
 
r
e
s
u
m
e
 
t
e
m
p
l
a
t
e
s
 
a
n
d
 
o
p
e
n
 
t
h
e
m
 
i
n
 
t
h
e
 
e
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
 
A
t
m
o
s
p
h
e
r
i
c
 
b
a
c
k
g
r
o
u
n
d
 
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
i
x
e
d
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
i
n
d
i
g
o
-
1
0
0
 
t
o
-
v
i
o
l
e
t
-
1
0
0
 
d
a
r
k
:
f
r
o
m
-
i
n
d
i
g
o
-
9
0
0
/
2
0
 
d
a
r
k
:
t
o
-
v
i
o
l
e
t
-
9
0
0
/
2
0
 
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
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
l
i
n
e
a
r
-
t
o
-
t
r
 
f
r
o
m
-
s
l
a
t
e
-
1
0
0
 
t
o
-
b
l
u
e
-
1
0
0
 
d
a
r
k
:
f
r
o
m
-
s
l
a
t
e
-
9
0
0
/
2
0
 
d
a
r
k
:
t
o
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
2
0
 
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
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
o
p
a
c
i
t
y
-
[
0
.
0
2
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
3
]
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
c
u
r
r
e
n
t
C
o
l
o
r
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
,
 
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
9
0
d
e
g
,
 
c
u
r
r
e
n
t
C
o
l
o
r
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
4
8
p
x
 
4
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
P
a
g
e
 
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
 
2
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
6
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
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
 
m
b
-
8
 
p
x
-
4
"


 
 
 
 
 
 
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
2
x
l
 
s
m
:
t
e
x
t
-
4
x
l
 
l
g
:
t
e
x
t
-
5
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
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
9
5
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
w
h
i
t
e
 
m
b
-
2
 
s
m
:
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
L
a
T
e
X
 
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
"
t
e
x
t
-
g
r
a
d
i
e
n
t
-
a
c
c
e
n
t
"
>
R
e
s
u
m
e
 
T
e
m
p
l
a
t
e
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
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
s
m
 
s
m
:
t
e
x
t
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
5
0
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
g
r
a
y
-
5
0
0
 
m
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
P
i
c
k
 
a
 
t
e
m
p
l
a
t
e
,
 
o
p
e
n
 
i
t
 
i
n
 
t
h
e
 
e
d
i
t
o
r
,
 
a
n
d
 
c
u
s
t
o
m
i
z
e
 
i
t
 
t
o
 
y
o
u
r
 
n
e
e
d
s


 
 
 
 
 
 
 
 
<
/
p
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
A
t
s
T
o
o
l
s
N
a
v
 
/
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
 
F
i
l
t
e
r
 
*
/
}


 
 
 
 
 
 
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
6
 
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
5
,
 
d
e
l
a
y
:
 
0
.
1
 
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
p
x
-
4
 
s
m
:
p
x
-
6
 
m
b
-
6
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
2
 
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
 
p
b
-
1
 
s
c
r
o
l
l
b
a
r
-
n
o
n
e
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
I
E
S
.
m
a
p
(
(
c
a
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
a
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
r
i
a
n
t
=
{
c
a
t
e
g
o
r
y
 
=
=
=
 
c
a
t
.
v
a
l
u
e
 
?
 
"
m
o
n
o
"
 
:
 
"
o
u
t
l
i
n
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
C
a
t
e
g
o
r
y
(
c
a
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
s
h
r
i
n
k
-
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
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
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
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




 
 
 
 
 
 
{
/
*
 
T
e
m
p
l
a
t
e
s
 
G
r
i
d
 
-
 
2
 
p
e
r
 
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
p
x
-
4
 
s
m
:
p
x
-
6
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
 
m
d
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
6
"
>


 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
m
a
p
(
(
t
e
m
p
l
a
t
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
T
e
m
p
l
a
t
e
C
a
r
d
 
k
e
y
=
{
t
e
m
p
l
a
t
e
.
i
d
}
 
t
e
m
p
l
a
t
e
=
{
t
e
m
p
l
a
t
e
}
 
i
n
d
e
x
=
{
i
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
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
 
&
&
 
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
 
p
y
-
1
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
4
0
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
t
e
m
p
l
a
t
e
s
 
i
n
 
t
h
i
s
 
c
a
t
e
g
o
r
y
 
y
e
t
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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


 
 
)
;


}


