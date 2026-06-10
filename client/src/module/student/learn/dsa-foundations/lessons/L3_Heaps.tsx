
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
e
m
o
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
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
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
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
a
l
l
o
u
t
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
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
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
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
 
=
 
"
h
e
a
p
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
C
e
l
l
S
t
a
t
e
 
+
 
c
o
l
o
r
 
m
a
p
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
i
s
m
a
t
c
h
"
;




c
o
n
s
t
 
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
b
g
,


 
 
a
c
t
i
v
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
c
o
m
p
a
r
e
:
 
"
#
f
b
b
f
2
4
"
,


 
 
s
w
a
p
:
 
"
#
f
8
7
1
7
1
"
,


 
 
d
o
n
e
:
 
"
#
8
6
e
f
a
c
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
f
c
a
5
a
5
"
,


}
;




c
o
n
s
t
 
S
T
A
T
E
_
T
E
X
T
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
a
c
t
i
v
e
:
 
"
#
1
a
2
e
0
5
"
,


 
 
c
o
m
p
a
r
e
:
 
"
#
7
8
3
5
0
f
"
,


 
 
s
w
a
p
:
 
"
#
4
5
0
a
0
a
"
,


 
 
d
o
n
e
:
 
"
#
1
4
5
3
2
d
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
4
5
0
a
0
a
"
,


}
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
H
e
a
p
 
f
r
a
m
e
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
K
i
n
d
 
=
 
"
m
i
n
"
 
|
 
"
m
a
x
"
;


t
y
p
e
 
O
p
 
=
 
"
i
n
s
e
r
t
"
 
|
 
"
e
x
t
r
a
c
t
"
 
|
 
"
h
e
a
p
i
f
y
"
;




i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
;


 
 
a
r
r
S
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
C
e
l
l
S
t
a
t
e
>
;


 
 
m
e
s
s
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


 
 
v
a
r
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
>
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
(
h
e
a
p
,
 
v
)
:
"
,


 
 
"
 
 
h
e
a
p
.
p
u
s
h
(
v
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
a
p
p
e
n
d
 
t
o
 
e
n
d
"
,


 
 
"
 
 
i
 
←
 
h
e
a
p
.
l
e
n
g
t
h
 
−
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
i
 
>
 
0
:
"
,


 
 
"
 
 
 
 
p
a
r
e
n
t
 
←
 
(
i
 
−
 
1
)
 
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
h
e
a
p
[
i
]
 
v
i
o
l
a
t
e
s
 
o
r
d
e
r
 
w
i
t
h
 
h
e
a
p
[
p
a
r
e
n
t
]
:
"
,


 
 
"
 
 
 
 
 
 
s
w
a
p
 
h
e
a
p
[
i
]
,
 
h
e
a
p
[
p
a
r
e
n
t
]
"
,


 
 
"
 
 
 
 
 
 
i
 
←
 
p
a
r
e
n
t
"
,


 
 
"
 
 
 
 
e
l
s
e
 
b
r
e
a
k
"
,


]
;


c
o
n
s
t
 
P
S
E
U
D
O
_
E
X
T
R
A
C
T
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
e
x
t
r
a
c
t
(
h
e
a
p
)
:
"
,


 
 
"
 
 
t
o
p
 
←
 
h
e
a
p
[
0
]
"
,


 
 
"
 
 
h
e
a
p
[
0
]
 
←
 
h
e
a
p
.
p
o
p
(
)
 
 
 
 
 
 
 
#
 
m
o
v
e
 
l
a
s
t
 
t
o
 
r
o
o
t
"
,


 
 
"
 
 
i
 
←
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
t
r
u
e
:
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
s
i
f
t
-
d
o
w
n
"
,


 
 
"
 
 
 
 
l
 
←
 
2
i
+
1
,
 
r
 
←
 
2
i
+
2
"
,


 
 
"
 
 
 
 
b
e
s
t
 
←
 
i
"
,


 
 
"
 
 
 
 
i
f
 
l
 
<
 
n
 
a
n
d
 
h
e
a
p
[
l
]
 
b
e
a
t
s
 
h
e
a
p
[
b
e
s
t
]
:
 
b
e
s
t
 
←
 
l
"
,


 
 
"
 
 
 
 
i
f
 
r
 
<
 
n
 
a
n
d
 
h
e
a
p
[
r
]
 
b
e
a
t
s
 
h
e
a
p
[
b
e
s
t
]
:
 
b
e
s
t
 
←
 
r
"
,


 
 
"
 
 
 
 
i
f
 
b
e
s
t
 
=
=
 
i
:
 
b
r
e
a
k
"
,


 
 
"
 
 
 
 
s
w
a
p
 
h
e
a
p
[
i
]
,
 
h
e
a
p
[
b
e
s
t
]
;
 
i
 
←
 
b
e
s
t
"
,


 
 
"
 
 
r
e
t
u
r
n
 
t
o
p
"
,


]
;


c
o
n
s
t
 
P
S
E
U
D
O
_
H
E
A
P
I
F
Y
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
h
e
a
p
i
f
y
(
a
r
r
)
:
"
,


 
 
"
 
 
f
o
r
 
i
 
f
r
o
m
 
n
/
2
−
1
 
d
o
w
n
 
t
o
 
0
:
"
,


 
 
"
 
 
 
 
s
i
f
t
D
o
w
n
(
a
r
r
,
 
i
)
 
 
 
 
 
 
 
 
 
 
#
 
O
(
n
)
 
t
o
t
a
l
"
,


]
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
H
e
a
p
 
l
o
g
i
c
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
e
a
t
s
(
k
i
n
d
:
 
K
i
n
d
,
 
a
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
)
:
 
b
o
o
l
e
a
n
 
{


 
 
r
e
t
u
r
n
 
k
i
n
d
 
=
=
=
 
"
m
i
n
"
 
?
 
a
 
<
 
b
 
:
 
a
 
>
 
b
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
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
i
n
i
t
i
a
l
:
 
n
u
m
b
e
r
[
]
,
 
t
o
I
n
s
e
r
t
:
 
n
u
m
b
e
r
,
 
k
i
n
d
:
 
K
i
n
d
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
a
 
=
 
[
.
.
.
i
n
i
t
i
a
l
]
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
s
e
r
t
 
$
{
t
o
I
n
s
e
r
t
}
 
i
n
t
o
 
$
{
k
i
n
d
}
-
h
e
a
p
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
t
o
I
n
s
e
r
t
,
 
k
i
n
d
,
 
n
:
 
a
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
a
.
p
u
s
h
(
t
o
I
n
s
e
r
t
)
;


 
 
l
e
t
 
i
 
=
 
a
.
l
e
n
g
t
h
 
-
 
1
;


 
 
c
o
n
s
t
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
s
t
a
t
e
s
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
[
.
.
.
s
t
a
t
e
s
]
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
a
c
t
i
v
e
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
A
p
p
e
n
d
 
$
{
t
o
I
n
s
e
r
t
}
 
a
t
 
i
n
d
e
x
 
$
{
i
}
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
i
,
 
v
a
l
u
e
:
 
a
[
i
]
 
}
,


 
 
}
)
;


 
 
w
h
i
l
e
 
(
i
 
>
 
0
)
 
{


 
 
 
 
c
o
n
s
t
 
p
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
i
 
-
 
1
)
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
s
t
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
s
t
[
i
]
 
=
 
"
c
o
m
p
a
r
e
"
;
 
s
t
[
p
]
 
=
 
"
c
o
m
p
a
r
e
"
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
4
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
c
o
m
p
a
r
e
"
,
 
[
p
]
:
 
"
c
o
m
p
a
r
e
"
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
a
r
e
 
a
[
$
{
i
}
]
=
$
{
a
[
i
]
}
 
w
i
t
h
 
p
a
r
e
n
t
 
a
[
$
{
p
}
]
=
$
{
a
[
p
]
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
,
 
p
a
r
e
n
t
:
 
p
,
 
v
a
l
u
e
:
 
a
[
i
]
,
 
p
a
r
e
n
t
V
a
l
:
 
a
[
p
]
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
b
e
a
t
s
(
k
i
n
d
,
 
a
[
i
]
,
 
a
[
p
]
)
)
 
{


 
 
 
 
 
 
[
a
[
i
]
,
 
a
[
p
]
]
 
=
 
[
a
[
p
]
,
 
a
[
i
]
]
;


 
 
 
 
 
 
c
o
n
s
t
 
s
t
2
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
 
 
s
t
2
[
i
]
 
=
 
"
s
w
a
p
"
;
 
s
t
2
[
p
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
6
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
2
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
s
w
a
p
"
,
 
[
p
]
:
 
"
s
w
a
p
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
k
i
n
d
 
=
=
=
 
"
m
i
n
"
 
?
 
"
C
h
i
l
d
 
s
m
a
l
l
e
r
"
 
:
 
"
C
h
i
l
d
 
l
a
r
g
e
r
"
}
,
 
s
w
a
p
 
$
{
a
[
i
]
}
 
↔
 
$
{
a
[
p
]
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
,
 
p
a
r
e
n
t
:
 
p
,
 
s
w
a
p
p
e
d
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
i
 
=
 
p
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
8
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
H
e
a
p
 
o
r
d
e
r
 
r
e
s
t
o
r
e
d
.
 
S
t
o
p
.
`
,
 
v
a
r
s
:
 
{
 
i
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
a
r
r
:
 
[
.
.
.
a
]
,


 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
o
n
e
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
[
k
,
 
"
d
o
n
e
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
F
i
n
a
l
 
h
e
a
p
 
a
f
t
e
r
 
i
n
s
e
r
t
.
`
,
 
v
a
r
s
:
 
{
 
n
:
 
a
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
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
u
i
l
d
E
x
t
r
a
c
t
F
r
a
m
e
s
(
i
n
i
t
i
a
l
:
 
n
u
m
b
e
r
[
]
,
 
k
i
n
d
:
 
K
i
n
d
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
a
 
=
 
[
.
.
.
i
n
i
t
i
a
l
]
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
i
f
 
(
a
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
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
a
r
r
:
 
[
]
,
 
a
r
r
S
t
a
t
e
s
:
 
[
]
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
H
e
a
p
 
e
m
p
t
y
.
`
,
 
v
a
r
s
:
 
{
}
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
}


 
 
c
o
n
s
t
 
t
o
p
 
=
 
a
[
0
]
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
0
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
0
:
 
"
a
c
t
i
v
e
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
E
x
t
r
a
c
t
 
r
o
o
t
 
$
{
t
o
p
}
.
`
,
 
v
a
r
s
:
 
{
 
t
o
p
,
 
k
i
n
d
,
 
n
:
 
a
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
a
[
0
]
 
=
 
a
[
a
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
a
.
p
o
p
(
)
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
2
,
 
a
r
r
:
 
[
.
.
.
a
]
,


 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
0
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
a
.
l
e
n
g
t
h
 
>
 
0
 
?
 
{
 
0
:
 
"
s
w
a
p
"
 
}
 
:
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
M
o
v
e
 
l
a
s
t
 
e
l
e
m
e
n
t
 
t
o
 
r
o
o
t
.
 
S
i
f
t
 
d
o
w
n
.
`
,
 
v
a
r
s
:
 
{
 
e
x
t
r
a
c
t
e
d
:
 
t
o
p
,
 
n
:
 
a
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
l
e
t
 
i
 
=
 
0
;


 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
c
o
n
s
t
 
l
 
=
 
2
 
*
 
i
 
+
 
1
,
 
r
 
=
 
2
 
*
 
i
 
+
 
2
;


 
 
 
 
l
e
t
 
b
e
s
t
 
=
 
i
;


 
 
 
 
c
o
n
s
t
 
s
t
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
s
t
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
i
f
 
(
l
 
<
 
a
.
l
e
n
g
t
h
)
 
s
t
[
l
]
 
=
 
"
c
o
m
p
a
r
e
"
;


 
 
 
 
i
f
 
(
r
 
<
 
a
.
l
e
n
g
t
h
)
 
s
t
[
r
]
 
=
 
"
c
o
m
p
a
r
e
"
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
5
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
s
t
.
r
e
d
u
c
e
(
(
a
c
c
,
 
s
,
 
k
)
 
=
>
 
{
 
a
c
c
[
k
]
 
=
 
s
;
 
r
e
t
u
r
n
 
a
c
c
;
 
}
,
 
{
}
 
a
s
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
C
e
l
l
S
t
a
t
e
>
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
A
t
 
i
=
$
{
i
}
:
 
c
o
m
p
a
r
e
 
w
i
t
h
 
c
h
i
l
d
r
e
n
$
{
l
 
<
 
a
.
l
e
n
g
t
h
 
?
 
`
 
l
=
$
{
l
}
`
 
:
 
"
"
}
$
{
r
 
<
 
a
.
l
e
n
g
t
h
 
?
 
`
,
 
r
=
$
{
r
}
`
 
:
 
"
"
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
,
 
l
,
 
r
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
l
 
<
 
a
.
l
e
n
g
t
h
 
&
&
 
b
e
a
t
s
(
k
i
n
d
,
 
a
[
l
]
,
 
a
[
b
e
s
t
]
)
)
 
b
e
s
t
 
=
 
l
;


 
 
 
 
i
f
 
(
r
 
<
 
a
.
l
e
n
g
t
h
 
&
&
 
b
e
a
t
s
(
k
i
n
d
,
 
a
[
r
]
,
 
a
[
b
e
s
t
]
)
)
 
b
e
s
t
 
=
 
r
;


 
 
 
 
i
f
 
(
b
e
s
t
 
=
=
=
 
i
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
1
0
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
H
e
a
p
 
o
r
d
e
r
 
r
e
s
t
o
r
e
d
.
`
,
 
v
a
r
s
:
 
{
 
i
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
 
 
[
a
[
i
]
,
 
a
[
b
e
s
t
]
]
 
=
 
[
a
[
b
e
s
t
]
,
 
a
[
i
]
]
;


 
 
 
 
c
o
n
s
t
 
s
t
2
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
s
t
2
[
i
]
 
=
 
"
s
w
a
p
"
;
 
s
t
2
[
b
e
s
t
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
1
1
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
2
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
s
w
a
p
"
,
 
[
b
e
s
t
]
:
 
"
s
w
a
p
"
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
w
a
p
 
a
[
$
{
i
}
]
 
↔
 
a
[
$
{
b
e
s
t
}
]
.
`
,
 
v
a
r
s
:
 
{
 
i
,
 
b
e
s
t
,
 
s
w
a
p
p
e
d
:
 
"
y
e
s
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
 
=
 
b
e
s
t
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
2
,
 
a
r
r
:
 
[
.
.
.
a
]
,


 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
o
n
e
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
[
k
,
 
"
d
o
n
e
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
E
x
t
r
a
c
t
e
d
 
$
{
t
o
p
}
.
 
H
e
a
p
 
s
i
z
e
 
n
o
w
 
$
{
a
.
l
e
n
g
t
h
}
.
`
,
 
v
a
r
s
:
 
{
 
e
x
t
r
a
c
t
e
d
:
 
t
o
p
 
}
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
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
u
i
l
d
H
e
a
p
i
f
y
F
r
a
m
e
s
(
i
n
i
t
i
a
l
:
 
n
u
m
b
e
r
[
]
,
 
k
i
n
d
:
 
K
i
n
d
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
a
 
=
 
[
.
.
.
i
n
i
t
i
a
l
]
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
H
e
a
p
i
f
y
 
[
$
{
a
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
}
]
 
a
s
 
$
{
k
i
n
d
}
-
h
e
a
p
.
`
,
 
v
a
r
s
:
 
{
 
n
:
 
a
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
f
o
r
 
(
l
e
t
 
s
t
a
r
t
 
=
 
M
a
t
h
.
f
l
o
o
r
(
a
.
l
e
n
g
t
h
 
/
 
2
)
 
-
 
1
;
 
s
t
a
r
t
 
>
=
 
0
;
 
s
t
a
r
t
-
-
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
1
,
 
a
r
r
:
 
[
.
.
.
a
]
,


 
 
 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
 
=
=
=
 
s
t
a
r
t
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
s
t
a
r
t
]
:
 
"
a
c
t
i
v
e
"
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
i
f
t
 
d
o
w
n
 
f
r
o
m
 
i
n
d
e
x
 
$
{
s
t
a
r
t
}
 
(
v
a
l
u
e
 
$
{
a
[
s
t
a
r
t
]
}
)
.
`
,
 
v
a
r
s
:
 
{
 
s
t
a
r
t
,
 
v
a
l
u
e
:
 
a
[
s
t
a
r
t
]
 
}
,


 
 
 
 
}
)
;


 
 
 
 
l
e
t
 
i
 
=
 
s
t
a
r
t
;


 
 
 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
l
 
=
 
2
 
*
 
i
 
+
 
1
,
 
r
 
=
 
2
 
*
 
i
 
+
 
2
;


 
 
 
 
 
 
l
e
t
 
b
e
s
t
 
=
 
i
;


 
 
 
 
 
 
i
f
 
(
l
 
<
 
a
.
l
e
n
g
t
h
 
&
&
 
b
e
a
t
s
(
k
i
n
d
,
 
a
[
l
]
,
 
a
[
b
e
s
t
]
)
)
 
b
e
s
t
 
=
 
l
;


 
 
 
 
 
 
i
f
 
(
r
 
<
 
a
.
l
e
n
g
t
h
 
&
&
 
b
e
a
t
s
(
k
i
n
d
,
 
a
[
r
]
,
 
a
[
b
e
s
t
]
)
)
 
b
e
s
t
 
=
 
r
;


 
 
 
 
 
 
i
f
 
(
b
e
s
t
 
=
=
=
 
i
)
 
b
r
e
a
k
;


 
 
 
 
 
 
[
a
[
i
]
,
 
a
[
b
e
s
t
]
]
 
=
 
[
a
[
b
e
s
t
]
,
 
a
[
i
]
]
;


 
 
 
 
 
 
c
o
n
s
t
 
s
t
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
 
 
s
t
[
i
]
 
=
 
"
s
w
a
p
"
;
 
s
t
[
b
e
s
t
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
2
,
 
a
r
r
:
 
[
.
.
.
a
]
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
i
]
:
 
"
s
w
a
p
"
,
 
[
b
e
s
t
]
:
 
"
s
w
a
p
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
w
a
p
 
a
[
$
{
i
}
]
 
↔
 
a
[
$
{
b
e
s
t
}
]
.
`
,
 
v
a
r
s
:
 
{
 
i
,
 
b
e
s
t
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
i
 
=
 
b
e
s
t
;


 
 
 
 
}


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
2
,
 
a
r
r
:
 
[
.
.
.
a
]
,


 
 
 
 
a
r
r
S
t
a
t
e
s
:
 
a
.
m
a
p
(
(
)
 
=
>
 
"
d
o
n
e
"
)
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
[
k
,
 
"
d
o
n
e
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
H
e
a
p
i
f
y
 
c
o
m
p
l
e
t
e
.
 
T
h
i
s
 
i
s
 
a
 
v
a
l
i
d
 
$
{
k
i
n
d
}
-
h
e
a
p
.
`
,
 
v
a
r
s
:
 
{
 
n
:
 
a
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
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
 
p
a
r
s
e
A
r
r
(
s
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
[
]
 
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
 
p
 
=
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
x
)
 
=
>
 
x
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
.
m
a
p
(
N
u
m
b
e
r
)
;


 
 
i
f
 
(
p
.
s
o
m
e
(
(
n
)
 
=
>
 
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
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
 
p
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
h
e
a
p
 
t
r
e
e
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
H
e
a
p
T
r
e
e
S
V
G
(
{


 
 
a
r
r
,


 
 
n
o
d
e
S
t
a
t
e
s
,


 
 
w
i
d
t
h
 
=
 
5
6
0
,


 
 
h
e
i
g
h
t
 
=
 
2
4
0
,


}
:
 
{


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
C
e
l
l
S
t
a
t
e
>
;


 
 
w
i
d
t
h
?
:
 
n
u
m
b
e
r
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
R
 
=
 
1
8
;


 
 
i
f
 
(
a
r
r
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
 
C
o
m
p
u
t
e
 
x
/
y
 
p
o
s
i
t
i
o
n
s
 
f
o
r
 
e
a
c
h
 
i
n
d
e
x
 
i
n
 
a
 
c
o
m
p
l
e
t
e
 
b
i
n
a
r
y
 
t
r
e
e
 
l
a
y
o
u
t


 
 
c
o
n
s
t
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
l
o
g
2
(
a
r
r
.
l
e
n
g
t
h
)
)
;


 
 
c
o
n
s
t
 
p
o
s
i
t
i
o
n
s
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
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
 
a
r
r
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
 
{


 
 
 
 
c
o
n
s
t
 
d
e
p
t
h
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
l
o
g
2
(
i
 
+
 
1
)
)
;


 
 
 
 
c
o
n
s
t
 
p
o
s
I
n
L
e
v
e
l
 
=
 
i
 
+
 
1
 
-
 
M
a
t
h
.
p
o
w
(
2
,
 
d
e
p
t
h
)
;


 
 
 
 
c
o
n
s
t
 
t
o
t
a
l
I
n
L
e
v
e
l
 
=
 
M
a
t
h
.
p
o
w
(
2
,
 
d
e
p
t
h
)
;


 
 
 
 
c
o
n
s
t
 
x
 
=
 
(
(
p
o
s
I
n
L
e
v
e
l
 
+
 
0
.
5
)
 
/
 
t
o
t
a
l
I
n
L
e
v
e
l
)
 
*
 
w
i
d
t
h
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
3
0
 
+
 
d
e
p
t
h
 
*
 
(
(
h
e
i
g
h
t
 
-
 
4
0
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
m
a
x
D
e
p
t
h
)
)
;


 
 
 
 
p
o
s
i
t
i
o
n
s
.
p
u
s
h
(
{
 
x
,
 
y
 
}
)
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
s
v
g


 
 
 
 
 
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
w
i
d
t
h
}
 
$
{
h
e
i
g
h
t
}
`
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
m
a
x
H
e
i
g
h
t
:
 
h
e
i
g
h
t
 
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
l
o
c
k
"


 
 
 
 
>


 
 
 
 
 
 
{
a
r
r
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
 
=
 
2
 
*
 
i
 
+
 
1
,
 
r
 
=
 
2
 
*
 
i
 
+
 
2
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
`
e
$
{
i
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
 
<
 
a
r
r
.
l
e
n
g
t
h
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
x
}
 
y
1
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
y
 
+
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
o
s
i
t
i
o
n
s
[
l
]
.
x
}
 
y
2
=
{
p
o
s
i
t
i
o
n
s
[
l
]
.
y
 
-
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
r
 
<
 
a
r
r
.
l
e
n
g
t
h
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
x
}
 
y
1
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
y
 
+
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
o
s
i
t
i
o
n
s
[
r
]
.
x
}
 
y
2
=
{
p
o
s
i
t
i
o
n
s
[
r
]
.
y
 
-
 
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
a
r
r
.
m
a
p
(
(
v
a
l
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
n
o
d
e
S
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
S
T
A
T
E
_
C
O
L
O
R
[
s
t
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
g
 
=
 
S
T
A
T
E
_
T
E
X
T
[
s
t
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
`
n
$
{
i
}
`
}
 
s
t
y
l
e
=
{
{
 
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
:
 
"
a
l
l
 
0
.
3
s
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
x
}
 
c
y
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
y
}
 
r
=
{
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
:
 
"
f
i
l
l
 
0
.
3
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
x
}
 
y
=
{
p
o
s
i
t
i
o
n
s
[
i
]
.
y
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
{
1
1
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
f
g
}
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
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
 
A
r
r
a
y
V
i
e
w
(
{


 
 
a
r
r
,


 
 
s
t
a
t
e
s
,


}
:
 
{


 
 
a
r
r
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


}
)
 
{


 
 
i
f
 
(
a
r
r
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
 
m
a
x
V
a
l
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
a
r
r
,
 
1
)
;


 
 
c
o
n
s
t
 
c
e
l
l
W
 
=
 
M
a
t
h
.
m
i
n
(
5
6
,
 
M
a
t
h
.
m
a
x
(
2
8
,
 
M
a
t
h
.
f
l
o
o
r
(
5
6
0
 
/
 
a
r
r
.
l
e
n
g
t
h
)
)
)
;


 
 
c
o
n
s
t
 
H
 
=
 
8
0
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
e
n
d
 
g
a
p
-
1
 
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
"
>


 
 
 
 
 
 
{
a
r
r
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
s
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
 
=
 
M
a
t
h
.
m
a
x
(
2
0
,
 
M
a
t
h
.
r
o
u
n
d
(
(
v
 
/
 
m
a
x
V
a
l
)
 
*
 
H
)
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
0
.
5
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
c
e
l
l
W
 
}
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
w
-
f
u
l
l
 
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
n
t
-
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
h
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
:
 
S
T
A
T
E
_
C
O
L
O
R
[
s
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
T
A
T
E
_
T
E
X
T
[
s
t
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
a
l
l
 
0
.
3
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
o
n
e
-
4
0
0
"
>
{
i
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
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
t
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
1
0
,
 
4
,
 
1
5
,
 
2
0
,
 
0
,
 
8
,
 
2
5
,
 
2
"
)
;


 
 
c
o
n
s
t
 
[
o
p
,
 
s
e
t
O
p
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
O
p
>
(
"
h
e
a
p
i
f
y
"
)
;


 
 
c
o
n
s
t
 
[
k
i
n
d
,
 
s
e
t
K
i
n
d
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
K
i
n
d
>
(
"
m
i
n
"
)
;


 
 
c
o
n
s
t
 
[
i
n
s
e
r
t
V
a
l
,
 
s
e
t
I
n
s
e
r
t
V
a
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
(
3
)
;




 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
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
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
)
 
?
?
 
[
1
0
,
 
4
,
 
1
5
,
 
2
0
,
 
0
,
 
8
,
 
2
5
,
 
2
]
,
 
[
i
n
p
u
t
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
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
 
{


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
h
e
a
p
i
f
y
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
H
e
a
p
i
f
y
F
r
a
m
e
s
(
p
a
r
s
e
d
,
 
k
i
n
d
)
;


 
 
 
 
c
o
n
s
t
 
b
a
s
e
 
=
 
[
.
.
.
p
a
r
s
e
d
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
s
t
a
r
t
 
=
 
M
a
t
h
.
f
l
o
o
r
(
b
a
s
e
.
l
e
n
g
t
h
 
/
 
2
)
 
-
 
1
;
 
s
t
a
r
t
 
>
=
 
0
;
 
s
t
a
r
t
-
-
)
 
{


 
 
 
 
 
 
l
e
t
 
i
 
=
 
s
t
a
r
t
;


 
 
 
 
 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
 
=
 
2
 
*
 
i
 
+
 
1
,
 
r
 
=
 
2
 
*
 
i
 
+
 
2
;


 
 
 
 
 
 
 
 
l
e
t
 
b
e
s
t
 
=
 
i
;


 
 
 
 
 
 
 
 
i
f
 
(
l
 
<
 
b
a
s
e
.
l
e
n
g
t
h
 
&
&
 
b
e
a
t
s
(
k
i
n
d
,
 
b
a
s
e
[
l
]
,
 
b
a
s
e
[
b
e
s
t
]
)
)
 
b
e
s
t
 
=
 
l
;


 
 
 
 
 
 
 
 
i
f
 
(
r
 
<
 
b
a
s
e
.
l
e
n
g
t
h
 
&
&
 
b
e
a
t
s
(
k
i
n
d
,
 
b
a
s
e
[
r
]
,
 
b
a
s
e
[
b
e
s
t
]
)
)
 
b
e
s
t
 
=
 
r
;


 
 
 
 
 
 
 
 
i
f
 
(
b
e
s
t
 
=
=
=
 
i
)
 
b
r
e
a
k
;


 
 
 
 
 
 
 
 
[
b
a
s
e
[
i
]
,
 
b
a
s
e
[
b
e
s
t
]
]
 
=
 
[
b
a
s
e
[
b
e
s
t
]
,
 
b
a
s
e
[
i
]
]
;


 
 
 
 
 
 
 
 
i
 
=
 
b
e
s
t
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
i
n
s
e
r
t
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
b
a
s
e
,
 
i
n
s
e
r
t
V
a
l
,
 
k
i
n
d
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
E
x
t
r
a
c
t
F
r
a
m
e
s
(
b
a
s
e
,
 
k
i
n
d
)
;


 
 
}
,
 
[
o
p
,
 
k
i
n
d
,
 
p
a
r
s
e
d
,
 
i
n
s
e
r
t
V
a
l
]
)
;




 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
o
p
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
:
 
o
p
 
=
=
=
 
"
e
x
t
r
a
c
t
"
 
?
 
P
S
E
U
D
O
_
E
X
T
R
A
C
T
 
:
 
P
S
E
U
D
O
_
H
E
A
P
I
F
Y
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
H
e
a
p
,
 
$
{
o
p
}
 
(
$
{
k
i
n
d
}
-
h
e
a
p
)
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
i
t
i
a
l
 
a
r
r
a
y
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
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
e
.
g
.
 
1
0
,
 
4
,
 
1
5
,
 
2
0
,
 
0
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{
o
p
 
=
=
=
 
"
h
e
a
p
i
f
y
"
 
?
 
"
A
n
y
 
a
r
r
a
y
,
 
w
i
l
l
 
b
e
 
s
i
f
t
-
h
e
a
p
i
f
i
e
d
.
"
 
:
 
"
A
r
r
a
y
 
i
s
 
f
i
r
s
t
 
h
e
a
p
i
f
i
e
d
;
 
o
p
 
r
u
n
s
 
o
n
 
t
h
a
t
 
h
e
a
p
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
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
1
0
,
 
4
,
 
1
5
,
 
2
0
,
 
0
,
 
8
,
 
2
5
,
 
2
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
S
o
r
t
e
d
 
a
s
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
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
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
S
o
r
t
e
d
 
d
e
s
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
9
,
 
8
,
 
7
,
 
6
,
 
5
,
 
4
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
W
o
r
s
t
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
2
5
,
 
4
0
,
 
1
0
,
 
2
0
,
 
3
0
,
 
3
5
,
 
5
,
 
7
,
 
1
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
o
p
e
r
a
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
h
e
a
p
i
f
y
"
,
 
"
i
n
s
e
r
t
"
,
 
"
e
x
t
r
a
c
t
"
]
 
a
s
 
O
p
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
m
}
 
a
c
t
i
v
e
=
{
o
p
 
=
=
=
 
m
}
 
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
O
p
(
m
)
}
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
[
1
1
p
x
]
 
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
 
c
a
p
i
t
a
l
i
z
e
"
>
{
m
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
P
i
l
l
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
 
f
l
e
x
-
c
o
l
 
g
a
p
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
h
e
a
p
 
t
y
p
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
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
m
i
n
"
,
 
"
m
a
x
"
]
 
a
s
 
K
i
n
d
[
]
)
.
m
a
p
(
(
k
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
k
}
 
a
c
t
i
v
e
=
{
k
i
n
d
 
=
=
=
 
k
}
 
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
K
i
n
d
(
k
)
}
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
[
1
1
p
x
]
 
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
"
>
{
k
}
-
h
e
a
p
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
o
p
 
=
=
=
 
"
i
n
s
e
r
t
"
 
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
 
g
a
p
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
i
n
s
e
r
t
 
v
a
l
u
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
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
s
e
r
t
V
a
l
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
I
n
s
e
r
t
V
a
l
(
N
u
m
b
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
2
4
 
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
s
t
o
n
e
-
3
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
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
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
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
t
r
e
e
 
v
i
e
w


 
 
 
 
 
 
 
 
 
 
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
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
H
e
a
p
T
r
e
e
S
V
G


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
r
=
{
f
r
a
m
e
?
.
a
r
r
 
?
?
 
[
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
=
{
f
r
a
m
e
?
.
n
o
d
e
S
t
a
t
e
s
 
?
?
 
{
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
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
a
r
r
a
y
 
v
i
e
w


 
 
 
 
 
 
 
 
 
 
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
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
p
-
3
 
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
A
r
r
a
y
V
i
e
w
 
a
r
r
=
{
f
r
a
m
e
?
.
a
r
r
 
?
?
 
[
]
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
?
.
a
r
r
S
t
a
t
e
s
 
?
?
 
[
]
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


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
a
l
g
o
r
i
t
h
m
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
i
t
e
m
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
o
m
p
l
e
t
e
 
b
i
n
a
r
y
 
t
r
e
e
"
,
 
b
o
d
y
:
 
"
H
e
a
p
s
 
f
i
l
l
 
l
e
v
e
l
 
b
y
 
l
e
v
e
l
,
 
l
e
f
t
 
t
o
 
r
i
g
h
t
,
 
t
h
i
s
 
l
e
t
s
 
u
s
 
s
t
o
r
e
 
t
h
e
m
 
i
n
 
a
n
 
a
r
r
a
y
 
w
i
t
h
 
z
e
r
o
 
w
a
s
t
e
d
 
s
l
o
t
s
.
 
F
o
r
 
i
n
d
e
x
 
i
:
 
p
a
r
e
n
t
 
=
 
⌊
(
i
−
1
)
/
2
⌋
,
 
c
h
i
l
d
r
e
n
 
=
 
2
i
+
1
 
a
n
d
 
2
i
+
2
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
H
e
a
p
 
p
r
o
p
e
r
t
y
"
,
 
b
o
d
y
:
 
"
M
i
n
-
h
e
a
p
:
 
e
v
e
r
y
 
n
o
d
e
 
≤
 
i
t
s
 
c
h
i
l
d
r
e
n
,
 
s
o
 
t
h
e
 
m
i
n
i
m
u
m
 
i
s
 
a
t
 
t
h
e
 
r
o
o
t
.
 
M
a
x
-
h
e
a
p
 
f
l
i
p
s
 
t
h
e
 
i
n
e
q
u
a
l
i
t
y
.
 
T
h
e
 
h
e
a
p
 
p
r
o
p
e
r
t
y
 
i
s
 
l
o
c
a
l
,
 
n
o
 
o
r
d
e
r
i
n
g
 
b
e
t
w
e
e
n
 
s
i
b
l
i
n
g
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
r
e
e
 
c
o
r
e
 
o
p
s
"
,
 
b
o
d
y
:
 
"
i
n
s
e
r
t
 
(
O
(
l
o
g
 
n
)
 
b
u
b
b
l
e
-
u
p
)
,
 
e
x
t
r
a
c
t
M
i
n
/
M
a
x
 
(
O
(
l
o
g
 
n
)
 
s
i
f
t
-
d
o
w
n
)
,
 
h
e
a
p
i
f
y
 
(
O
(
n
)
 
b
u
l
k
 
b
u
i
l
d
)
.
 
T
o
g
e
t
h
e
r
 
t
h
e
y
 
p
o
w
e
r
 
D
i
j
k
s
t
r
a
,
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
s
,
 
h
e
a
p
-
s
o
r
t
,
 
a
n
d
 
m
e
d
i
a
n
 
t
r
i
c
k
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
H
e
a
p
 
v
s
 
B
S
T
"
,
 
b
o
d
y
:
 
"
A
 
B
S
T
 
s
u
p
p
o
r
t
s
 
o
r
d
e
r
e
d
 
t
r
a
v
e
r
s
a
l
 
a
n
d
 
r
a
n
g
e
 
q
u
e
r
i
e
s
;
 
a
 
h
e
a
p
 
o
n
l
y
 
g
i
v
e
s
 
y
o
u
 
t
h
e
 
e
x
t
r
e
m
e
.
 
B
e
c
a
u
s
e
 
h
e
a
p
s
 
d
o
n
'
t
 
r
e
q
u
i
r
e
 
f
u
l
l
 
o
r
d
e
r
i
n
g
,
 
t
h
e
y
 
a
r
e
 
s
m
a
l
l
e
r
,
 
f
a
s
t
e
r
,
 
a
n
d
 
f
i
t
 
n
e
a
t
l
y
 
i
n
 
a
n
 
a
r
r
a
y
.
"
 
}
,


 
 
]
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
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
p
r
i
o
r
i
t
y
 
q
u
e
u
e
 
i
n
 
4
0
 
b
y
t
e
s
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
A
r
r
a
y
-
b
a
c
k
e
d
 
t
r
e
e
,
 
O
(
l
o
g
 
n
)
 
i
n
s
e
r
t
 
a
n
d
 
e
x
t
r
a
c
t
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
H
e
a
p
s
 
a
r
e
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
 
o
f
 
a
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
:
 
g
i
v
e
 
m
e
 
t
h
e
 
h
i
g
h
e
s
t
-
p
r
i
o
r
i
t
y


 
 
 
 
 
 
 
 
 
 
e
l
e
m
e
n
t
 
f
a
s
t
,
 
a
n
d
 
l
e
t
 
m
e
 
a
d
d
 
n
e
w
 
e
l
e
m
e
n
t
s
 
f
a
s
t
.
 
T
h
a
t
 
i
s
 
e
x
a
c
t
l
y
 
w
h
a
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
i
n
s
e
r
t
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
n
d
 
<
I
n
l
i
n
e
C
o
d
e
>
e
x
t
r
a
c
t
<
/
I
n
l
i
n
e
C
o
d
e
>
 
p
r
o
v
i
d
e
 
a
t
 
O
(
l
o
g
 
n
)
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
3
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
m
a
p
(
(
s
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
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
l
i
m
e
-
6
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
l
i
m
e
-
4
0
0
 
m
b
-
2
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
m
b
-
1
.
5
"
>
{
s
.
t
i
t
l
e
}
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
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
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
"
>
{
s
.
b
o
d
y
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
H
e
a
p
i
f
y
 
[
4
,
1
0
,
3
,
5
,
1
]
 
i
n
t
o
 
m
i
n
-
h
e
a
p
.
 
R
o
o
t
 
v
a
l
u
e
?
"
,
 
a
:
 
"
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
M
i
n
-
h
e
a
p
 
[
1
,
3
,
5
,
4
,
8
]
.
 
A
f
t
e
r
 
i
n
s
e
r
t
 
2
,
 
t
h
e
 
r
o
o
t
 
i
s
?
"
,
 
a
:
 
"
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
M
a
x
-
h
e
a
p
 
[
2
0
,
1
5
,
1
0
,
8
,
7
,
5
]
.
 
e
x
t
r
a
c
t
M
a
x
,
 
n
e
w
 
r
o
o
t
 
i
s
?
"
,
 
a
:
 
"
1
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
i
m
e
 
f
o
r
 
h
e
a
p
S
o
r
t
 
o
n
 
n
 
i
t
e
m
s
?
"
,
 
a
:
 
"
O
(
n
 
l
o
g
 
n
)
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
,
 
s
e
t
G
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
(
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
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
,
 
s
e
t
S
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
D
o
 
t
h
e
m
 
m
e
n
t
a
l
l
y
,
 
t
h
e
n
 
r
e
v
e
a
l
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
v
 
=
 
(
g
[
i
]
 
?
?
 
"
"
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
s
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
v
 
=
=
=
 
p
.
a
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
s
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
4
 
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
 
f
l
e
x
-
w
r
a
p
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
"
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
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
m
o
n
o
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
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
s
m
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
f
l
e
x
-
1
 
m
i
n
-
w
-
0
 
b
a
s
i
s
-
6
4
"
>
{
p
.
q
}
<
/
s
p
a
n
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
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
[
i
]
 
?
?
 
"
"
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
]
;
 
v
[
i
]
 
=
 
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
;
 
s
e
t
G
(
v
)
;
 
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
w
-
3
6
 
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
s
t
o
n
e
-
3
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
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
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
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
(
v
)
;
 
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
3
 
p
y
-
1
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
m
d
 
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
s
t
o
n
e
-
3
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
w
h
i
t
e
/
1
0
 
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
b
o
l
d
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
s
t
o
n
e
-
5
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
w
h
i
t
e
/
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
o
l
d
 
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
 
r
o
u
n
d
e
d
-
m
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
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
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
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
l
i
m
e
-
2
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
l
i
m
e
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
o
s
e
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
r
o
s
e
-
5
0
0
/
1
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
8
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
r
o
s
e
-
2
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
r
o
s
e
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
c
o
r
r
e
c
t
 
?
 
"
C
o
r
r
e
c
t
"
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
h
e
a
p
i
f
y
 
i
s
 
O
(
n
)
,
 
n
o
t
 
O
(
n
 
l
o
g
 
n
)
<
/
S
u
b
H
e
a
d
i
n
g
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
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
S
i
f
t
-
d
o
w
n
 
f
r
o
m
 
i
n
d
e
x
 
i
 
d
o
e
s
 
w
o
r
k
 
p
r
o
p
o
r
t
i
o
n
a
l
 
t
o
 
t
h
e
 
h
e
i
g
h
t
 
o
f
 
t
h
a
t
 
s
u
b
t
r
e
e
,
 
n
o
t
 
o
f
 
t
h
e


 
 
 
 
 
 
 
 
 
 
w
h
o
l
e
 
t
r
e
e
.
 
S
u
m
m
i
n
g
 
a
c
r
o
s
s
 
a
l
l
 
n
o
d
e
s
 
g
i
v
e
s
 
a
 
g
e
o
m
e
t
r
i
c
 
s
e
r
i
e
s
 
t
h
a
t
 
c
o
n
v
e
r
g
e
s
 
t
o
 
O
(
n
)
.
 
T
h
i
s


 
 
 
 
 
 
 
 
 
 
i
s
 
a
n
 
i
n
t
e
r
v
i
e
w
-
f
a
v
o
r
i
t
e
 
d
e
r
i
v
a
t
i
o
n
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
i
n
y
 
p
o
i
n
t
e
r
 
m
a
t
h
<
/
S
u
b
H
e
a
d
i
n
g
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
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
F
o
r
 
0
-
i
n
d
e
x
e
d
 
h
e
a
p
s
:
 
p
a
r
e
n
t
(
i
)
 
=
 
(
i
−
1
)
/
2
,
 
l
e
f
t
(
i
)
 
=
 
2
i
+
1
,
 
r
i
g
h
t
(
i
)
 
=
 
2
i
+
2
.
 
F
o
r
 
1
-
i
n
d
e
x
e
d


 
 
 
 
 
 
 
 
 
 
h
e
a
p
s
:
 
p
a
r
e
n
t
(
i
)
 
=
 
i
/
2
,
 
l
e
f
t
(
i
)
 
=
 
2
i
,
 
r
i
g
h
t
(
i
)
 
=
 
2
i
+
1
.
 
I
n
t
e
r
v
i
e
w
e
r
s
 
o
f
t
e
n
 
a
s
k
 
w
h
y


 
 
 
 
 
 
 
 
 
 
1
-
i
n
d
e
x
e
d
 
i
s
 
s
l
i
g
h
t
l
y
 
p
r
e
t
t
i
e
r
,
 
t
h
e
s
e
 
f
o
r
m
u
l
a
s
 
a
r
e
 
w
h
y
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
K
-
t
h
 
l
a
r
g
e
s
t
 
t
r
i
c
k
<
/
S
u
b
H
e
a
d
i
n
g
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
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
M
a
i
n
t
a
i
n
 
a
 
m
i
n
-
h
e
a
p
 
o
f
 
s
i
z
e
 
k
.
 
F
o
r
 
e
a
c
h
 
n
e
w
 
e
l
e
m
e
n
t
,
 
p
u
s
h
 
i
t
 
a
n
d
 
p
o
p
 
t
h
e
 
s
m
a
l
l
e
s
t
 
i
f
 
s
i
z
e


 
 
 
 
 
 
 
 
 
 
e
x
c
e
e
d
s
 
k
.
 
T
h
e
 
r
o
o
t
 
i
s
 
t
h
e
 
k
-
t
h
 
l
a
r
g
e
s
t
.
 
T
i
m
e
 
O
(
n
 
l
o
g
 
k
)
,
 
s
p
a
c
e
 
O
(
k
)
,
 
c
a
n
o
n
i
c
a
l
 
i
n
t
e
r
v
i
e
w


 
 
 
 
 
 
 
 
 
 
p
a
t
t
e
r
n
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
S
t
d
l
i
b
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
s
,
 
t
h
r
e
e
 
t
r
a
p
s
 
y
o
u
 
m
u
s
t
 
k
n
o
w
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
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
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
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
 
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>
P
y
t
h
o
n
 
<
I
n
l
i
n
e
C
o
d
e
>
h
e
a
p
q
<
/
I
n
l
i
n
e
C
o
d
e
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
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
-
h
e
a
p
 
o
n
l
y
.
 
F
o
r
 
m
a
x
-
h
e
a
p
,
 
p
u
s
h
 
t
h
e
 
n
e
g
a
t
e
d
 
v
a
l
u
e
 
a
n
d
 
n
e
g
a
t
e
 
o
n
 
p
o
p
.
 
T
h
e
r
e
 
i
s
 
n
o
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
d
e
c
r
e
a
s
e
-
k
e
y
<
/
I
n
l
i
n
e
C
o
d
e
>
 
o
p
e
r
a
t
i
o
n
,
 
f
o
r
 
D
i
j
k
s
t
r
a
,
 
u
s
e
 
t
h
e
 
l
a
z
y
 
p
a
t
t
e
r
n


 
 
 
 
 
 
 
 
 
 
 
 
(
p
u
s
h
 
d
u
p
l
i
c
a
t
e
 
e
n
t
r
i
e
s
,
 
s
k
i
p
 
s
t
a
l
e
 
p
o
p
s
)
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>
J
a
v
a
 
<
I
n
l
i
n
e
C
o
d
e
>
P
r
i
o
r
i
t
y
Q
u
e
u
e
<
/
I
n
l
i
n
e
C
o
d
e
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
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
a
l
s
o
 
m
i
n
-
h
e
a
p
 
b
y
 
d
e
f
a
u
l
t
.
 
P
a
s
s
 
a
 
c
u
s
t
o
m
 
c
o
m
p
a
r
a
t
o
r
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
(
a
,
b
)
 
-
&
g
t
;
 
b
 
-
 
a
<
/
I
n
l
i
n
e
C
o
d
e
>
 
f
o
r
 
m
a
x
-
h
e
a
p
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>
C
+
+
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
p
r
i
o
r
i
t
y
_
q
u
e
u
e
<
/
I
n
l
i
n
e
C
o
d
e
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
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
d
e
f
a
u
l
t
s
 
t
o
 
M
A
X
-
h
e
a
p
,
 
o
p
p
o
s
i
t
e
 
o
f
 
P
y
t
h
o
n
 
a
n
d
 
J
a
v
a
.
 
F
o
r
 
m
i
n
-
h
e
a
p
 
p
a
s
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
g
r
e
a
t
e
r
&
l
t
;
T
&
g
t
;
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
P
o
r
t
i
n
g
 
g
o
t
c
h
a
 
#
1
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>
T
i
e
-
b
r
e
a
k
i
n
g
<
/
s
t
r
o
n
g
>
:
 
h
e
a
p
q
 
s
o
r
t
s


 
 
 
 
 
 
 
 
 
 
 
 
b
y
 
t
u
p
l
e
 
c
o
m
p
a
r
i
s
o
n
,
 
<
I
n
l
i
n
e
C
o
d
e
>
(
p
r
i
o
r
i
t
y
,
 
s
e
q
u
e
n
c
e
_
n
o
,
 
i
t
e
m
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
v
o
i
d
s


 
 
 
 
 
 
 
 
 
 
 
 
o
r
d
e
r
i
n
g
 
e
r
r
o
r
s
 
w
h
e
n
 
i
t
e
m
s
 
a
r
e
 
n
o
t
 
c
o
m
p
a
r
a
b
l
e
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
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
s
t
o
n
e
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
s
t
o
n
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
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
-
5
"
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
D
e
c
r
e
a
s
e
-
k
e
y
:
 
w
h
y
 
p
r
o
d
u
c
t
i
o
n
 
D
i
j
k
s
t
r
a
 
u
s
e
s
 
l
a
z
y
 
d
e
l
e
t
i
o
n
<
/
S
u
b
H
e
a
d
i
n
g
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
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
A
 
b
i
n
a
r
y
 
h
e
a
p
 
c
a
n
 
d
e
c
r
e
a
s
e
-
k
e
y
 
i
n
 
O
(
l
o
g
 
n
)
 
o
n
l
y
 
i
f
 
y
o
u
 
k
e
e
p
 
a
n
 
i
n
d
e
x
 
f
r
o
m
 
k
e
y
 
t
o
 
p
o
s
i
t
i
o
n
.


 
 
 
 
 
 
 
 
 
 
P
y
t
h
o
n
 
<
I
n
l
i
n
e
C
o
d
e
>
h
e
a
p
q
<
/
I
n
l
i
n
e
C
o
d
e
>
 
d
o
e
s
 
n
o
t
.
 
J
a
v
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
P
r
i
o
r
i
t
y
Q
u
e
u
e
.
r
e
m
o
v
e
(
o
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
 
O
(
n
)
.
 
T
h
e
 
s
t
a
n
d
a
r
d
 
w
o
r
k
a
r
o
u
n
d
:
 
j
u
s
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
p
u
s
h
(
n
e
w
_
p
r
i
o
r
i
t
y
,
 
k
e
y
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
g
a
i
n
,
 
a
n
d
 
w
h
e
n
 
y
o
u
 
p
o
p
 
a
 
k
e
y
 
w
h
o
s
e


 
 
 
 
 
 
 
 
 
 
p
r
i
o
r
i
t
y
 
n
o
 
l
o
n
g
e
r
 
m
a
t
c
h
e
s
 
t
h
e
 
l
a
t
e
s
t
 
o
n
e
,
 
s
k
i
p
 
i
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
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
3
_
H
e
a
p
s
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
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
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
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
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
a
 
0
-
i
n
d
e
x
e
d
 
a
r
r
a
y
 
h
e
a
p
,
 
t
h
e
 
p
a
r
e
n
t
 
o
f
 
i
n
d
e
x
 
i
 
i
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
2
i
 
+
 
1
"
,
 
"
(
i
 
−
 
1
)
 
/
 
2
 
(
f
l
o
o
r
)
"
,
 
"
i
 
/
 
2
"
,
 
"
i
 
−
 
1
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
h
i
l
d
r
e
n
 
l
i
v
e
 
a
t
 
2
i
+
1
 
a
n
d
 
2
i
+
2
,
 
s
o
 
t
h
e
 
p
a
r
e
n
t
 
o
f
 
i
 
i
s
 
⌊
(
i
−
1
)
/
2
⌋
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
B
u
i
l
d
i
n
g
 
a
 
h
e
a
p
 
f
r
o
m
 
a
n
 
u
n
s
o
r
t
e
d
 
a
r
r
a
y
 
v
i
a
 
b
o
t
t
o
m
-
u
p
 
h
e
a
p
i
f
y
 
c
o
s
t
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
²
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
g
e
o
m
e
t
r
i
c
 
s
u
m
 
o
f
 
s
i
f
t
-
d
o
w
n
 
h
e
i
g
h
t
s
 
g
i
v
e
s
 
a
 
t
i
g
h
t
 
O
(
n
)
 
b
o
u
n
d
,
 
f
a
s
t
e
r
 
t
h
a
n
 
i
n
s
e
r
t
i
n
g
 
o
n
e
-
b
y
-
o
n
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
o
 
f
i
n
d
 
t
h
e
 
k
t
h
 
l
a
r
g
e
s
t
 
e
l
e
m
e
n
t
 
a
m
o
n
g
 
n
 
i
t
e
m
s
,
 
a
 
h
e
a
p
-
b
a
s
e
d
 
a
p
p
r
o
a
c
h
 
u
s
e
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
a
 
m
a
x
-
h
e
a
p
 
o
f
 
s
i
z
e
 
n
"
,


 
 
 
 
 
 
 
 
"
a
 
m
i
n
-
h
e
a
p
 
o
f
 
s
i
z
e
 
k
"
,


 
 
 
 
 
 
 
 
"
a
 
s
o
r
t
e
d
 
l
i
n
k
e
d
 
l
i
s
t
"
,


 
 
 
 
 
 
 
 
"
t
w
o
 
h
e
a
p
s
 
o
f
 
s
i
z
e
 
n
/
2
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
K
e
e
p
 
a
 
m
i
n
-
h
e
a
p
 
o
f
 
s
i
z
e
 
k
;
 
i
t
s
 
r
o
o
t
 
i
s
 
t
h
e
 
k
t
h
 
l
a
r
g
e
s
t
.
 
T
i
m
e
 
O
(
n
 
l
o
g
 
k
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
o
p
e
r
a
t
i
o
n
 
i
s
 
N
O
T
 
O
(
l
o
g
 
n
)
 
o
n
 
a
 
b
i
n
a
r
y
 
h
e
a
p
 
o
f
 
n
 
e
l
e
m
e
n
t
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
i
n
s
e
r
t
"
,
 
"
e
x
t
r
a
c
t
-
m
i
n
"
,
 
"
p
e
e
k
-
m
i
n
"
,
 
"
d
e
c
r
e
a
s
e
-
k
e
y
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
p
e
e
k
-
m
i
n
 
i
s
 
O
(
1
)
,
 
i
t
 
i
s
 
j
u
s
t
 
t
h
e
 
r
o
o
t
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
H
e
a
p
s
 
&
 
P
r
i
o
r
i
t
y
 
Q
u
e
u
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
5
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
P
r
i
o
r
i
t
y
 
q
u
e
u
e
s
,
 
D
i
j
k
s
t
r
a
,
 
t
o
p
-
K
,
 
s
t
r
e
a
m
 
m
e
d
i
a
n
s
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
T
r
i
e
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


