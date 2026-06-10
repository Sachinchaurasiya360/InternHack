
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


 
 
C
a
r
d
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
g
r
e
e
d
y
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
 
 
A
C
T
I
V
I
T
Y
 
S
E
L
E
C
T
I
O
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
A
c
t
i
v
i
t
y
 
{
 
i
d
:
 
n
u
m
b
e
r
;
 
s
t
a
r
t
:
 
n
u
m
b
e
r
;
 
e
n
d
:
 
n
u
m
b
e
r
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
 
A
S
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


 
 
a
c
t
i
v
i
t
i
e
s
:
 
A
c
t
i
v
i
t
y
[
]
;


 
 
s
t
a
t
e
:
 
(
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
p
i
c
k
e
d
"
 
|
 
"
s
k
i
p
p
e
d
"
 
|
 
"
c
h
e
c
k
i
n
g
"
)
[
]
;


 
 
l
a
s
t
E
n
d
:
 
n
u
m
b
e
r
;


 
 
p
i
c
k
e
d
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
A
S
 
=
 
[
"
s
o
r
t
 
a
c
t
i
v
i
t
i
e
s
 
b
y
 
e
n
d
 
t
i
m
e
"
,
 
"
l
a
s
t
E
n
d
 
←
 
-
∞
;
 
r
e
s
u
l
t
 
←
 
[
]
"
,
 
"
f
o
r
 
e
a
c
h
 
a
c
t
i
v
i
t
y
 
a
 
i
n
 
o
r
d
e
r
:
"
,
 
"
 
 
i
f
 
a
.
s
t
a
r
t
 
>
=
 
l
a
s
t
E
n
d
:
"
,
 
"
 
 
 
 
p
i
c
k
 
a
;
 
l
a
s
t
E
n
d
 
←
 
a
.
e
n
d
"
,
 
"
 
 
e
l
s
e
:
 
s
k
i
p
"
]
;




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
c
t
i
v
i
t
i
e
s
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
 
A
c
t
i
v
i
t
y
[
]
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
s
.
t
r
i
m
(
)
.
s
p
l
i
t
(
/
\
s
+
/
)
;


 
 
c
o
n
s
t
 
o
u
t
:
 
A
c
t
i
v
i
t
y
[
]
 
=
 
[
]
;


 
 
l
e
t
 
i
d
 
=
 
0
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
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
x
)
 
=
>
 
N
u
m
b
e
r
(
x
)
)
;


 
 
 
 
i
f
 
(
m
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
 
2
 
&
&
 
!
m
.
s
o
m
e
(
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
)
)
 
o
u
t
.
p
u
s
h
(
{
 
i
d
:
 
i
d
+
+
,
 
s
t
a
r
t
:
 
m
[
0
]
,
 
e
n
d
:
 
m
[
1
]
 
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
 
o
u
t
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
A
c
t
i
v
i
t
y
S
e
l
(
a
c
t
i
v
i
t
i
e
s
:
 
A
c
t
i
v
i
t
y
[
]
)
:
 
A
S
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
 
s
o
r
t
e
d
 
=
 
[
.
.
.
a
c
t
i
v
i
t
i
e
s
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
e
n
d
 
-
 
b
.
e
n
d
 
|
|
 
a
.
s
t
a
r
t
 
-
 
b
.
s
t
a
r
t
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
:
 
A
S
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
 
A
S
F
r
a
m
e
[
"
s
t
a
t
e
"
]
 
=
 
s
o
r
t
e
d
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


 
 
l
e
t
 
l
a
s
t
E
n
d
 
=
 
-
I
n
f
i
n
i
t
y
;


 
 
c
o
n
s
t
 
p
i
c
k
e
d
:
 
n
u
m
b
e
r
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
 
v
a
r
s
:
 
{
 
n
:
 
s
o
r
t
e
d
.
l
e
n
g
t
h
 
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
 
"
S
t
e
p
 
1
:
 
s
o
r
t
 
a
c
t
i
v
i
t
i
e
s
 
b
y
 
f
i
n
i
s
h
i
n
g
 
t
i
m
e
.
"
,
 
a
c
t
i
v
i
t
i
e
s
:
 
s
o
r
t
e
d
,
 
s
t
a
t
e
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
 
l
a
s
t
E
n
d
,
 
p
i
c
k
e
d
:
 
[
.
.
.
p
i
c
k
e
d
]
 
}
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
 
1
,
 
v
a
r
s
:
 
{
 
l
a
s
t
E
n
d
:
 
"
-
∞
"
,
 
p
i
c
k
e
d
:
 
0
 
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
 
"
I
n
i
t
i
a
l
i
z
e
 
l
a
s
t
E
n
d
 
a
n
d
 
a
n
 
e
m
p
t
y
 
r
e
s
u
l
t
.
"
,
 
a
c
t
i
v
i
t
i
e
s
:
 
s
o
r
t
e
d
,
 
s
t
a
t
e
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
 
l
a
s
t
E
n
d
,
 
p
i
c
k
e
d
:
 
[
.
.
.
p
i
c
k
e
d
]
 
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
 
i
 
=
 
0
;
 
i
 
<
 
s
o
r
t
e
d
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
 
a
 
=
 
s
o
r
t
e
d
[
i
]
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
c
h
e
c
k
i
n
g
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
 
v
a
r
s
:
 
{
 
i
,
 
s
t
a
r
t
:
 
a
.
s
t
a
r
t
,
 
e
n
d
:
 
a
.
e
n
d
,
 
l
a
s
t
E
n
d
:
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
l
a
s
t
E
n
d
)
 
?
 
l
a
s
t
E
n
d
 
:
 
"
-
∞
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
a
m
i
n
e
 
a
c
t
i
v
i
t
y
 
$
{
a
.
i
d
}
 
(
$
{
a
.
s
t
a
r
t
}
.
.
$
{
a
.
e
n
d
}
)
.
`
,
 
a
c
t
i
v
i
t
i
e
s
:
 
s
o
r
t
e
d
,
 
s
t
a
t
e
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
 
l
a
s
t
E
n
d
,
 
p
i
c
k
e
d
:
 
[
.
.
.
p
i
c
k
e
d
]
 
}
)
;


 
 
 
 
i
f
 
(
a
.
s
t
a
r
t
 
>
=
 
l
a
s
t
E
n
d
)
 
{


 
 
 
 
 
 
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
p
i
c
k
e
d
"
;


 
 
 
 
 
 
p
i
c
k
e
d
.
p
u
s
h
(
a
.
i
d
)
;


 
 
 
 
 
 
l
a
s
t
E
n
d
 
=
 
a
.
e
n
d
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
 
v
a
r
s
:
 
{
 
i
,
 
p
i
c
k
e
d
:
 
p
i
c
k
e
d
.
l
e
n
g
t
h
,
 
l
a
s
t
E
n
d
 
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
t
a
r
t
 
$
{
a
.
s
t
a
r
t
}
 
≥
 
l
a
s
t
E
n
d
 
→
 
P
I
C
K
.
 
U
p
d
a
t
e
 
l
a
s
t
E
n
d
 
=
 
$
{
a
.
e
n
d
}
.
`
,
 
a
c
t
i
v
i
t
i
e
s
:
 
s
o
r
t
e
d
,
 
s
t
a
t
e
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
 
l
a
s
t
E
n
d
,
 
p
i
c
k
e
d
:
 
[
.
.
.
p
i
c
k
e
d
]
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
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
s
k
i
p
p
e
d
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
 
v
a
r
s
:
 
{
 
i
,
 
s
k
i
p
:
 
1
 
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
t
a
r
t
 
$
{
a
.
s
t
a
r
t
}
 
<
 
l
a
s
t
E
n
d
 
$
{
l
a
s
t
E
n
d
}
 
→
 
o
v
e
r
l
a
p
s
.
 
S
K
I
P
.
`
,
 
a
c
t
i
v
i
t
i
e
s
:
 
s
o
r
t
e
d
,
 
s
t
a
t
e
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
 
l
a
s
t
E
n
d
,
 
p
i
c
k
e
d
:
 
[
.
.
.
p
i
c
k
e
d
]
 
}
)
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
 
5
,
 
v
a
r
s
:
 
{
 
t
o
t
a
l
:
 
p
i
c
k
e
d
.
l
e
n
g
t
h
 
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
D
o
n
e
.
 
P
i
c
k
e
d
 
$
{
p
i
c
k
e
d
.
l
e
n
g
t
h
}
 
n
o
n
-
o
v
e
r
l
a
p
p
i
n
g
 
a
c
t
i
v
i
t
i
e
s
:
 
[
$
{
p
i
c
k
e
d
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
.
`
,
 
a
c
t
i
v
i
t
i
e
s
:
 
s
o
r
t
e
d
,
 
s
t
a
t
e
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
 
l
a
s
t
E
n
d
,
 
p
i
c
k
e
d
:
 
[
.
.
.
p
i
c
k
e
d
]
 
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
 
A
c
t
i
v
i
t
y
T
i
m
e
l
i
n
e
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
A
S
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
T
 
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
1
0
,
 
.
.
.
f
r
a
m
e
.
a
c
t
i
v
i
t
i
e
s
.
m
a
p
(
(
a
)
 
=
>
 
a
.
e
n
d
)
)
;


 
 
c
o
n
s
t
 
W
 
=
 
5
6
0
,
 
r
o
w
H
 
=
 
2
8
,
 
P
A
D
 
=
 
3
0
;


 
 
c
o
n
s
t
 
s
x
 
=
 
(
t
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
 
P
A
D
 
+
 
(
t
 
/
 
m
a
x
T
)
 
*
 
(
W
 
-
 
2
 
*
 
P
A
D
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
W
}
 
$
{
r
o
w
H
 
*
 
f
r
a
m
e
.
a
c
t
i
v
i
t
i
e
s
.
l
e
n
g
t
h
 
+
 
5
0
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
w
-
f
u
l
l
 
h
-
a
u
t
o
 
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
"
>


 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
P
A
D
}
 
y
1
=
{
2
0
}
 
x
2
=
{
W
 
-
 
P
A
D
}
 
y
2
=
{
2
0
}
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
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


 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
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
m
a
x
T
 
/
 
2
)
 
+
 
1
 
}
)
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
 
t
 
=
 
i
 
*
 
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
t
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
s
x
(
t
)
}
 
y
1
=
{
1
8
}
 
x
2
=
{
s
x
(
t
)
}
 
y
2
=
{
2
2
}
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
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
s
x
(
t
)
}
 
y
=
{
1
4
}
 
f
o
n
t
S
i
z
e
=
"
9
"
 
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
i
l
l
=
"
#
6
4
7
4
8
b
"
 
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
h
e
a
d
i
n
g
}
>
{
t
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


 
 
 
 
 
 
{
f
r
a
m
e
.
a
c
t
i
v
i
t
i
e
s
.
m
a
p
(
(
a
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
 
f
r
a
m
e
.
s
t
a
t
e
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
s
t
 
=
=
=
 
"
p
i
c
k
e
d
"
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
s
t
 
=
=
=
 
"
s
k
i
p
p
e
d
"
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
s
t
 
=
=
=
 
"
c
h
e
c
k
i
n
g
"
 
?
 
"
#
f
5
9
e
0
b
"
 
:
 
"
#
c
b
d
5
e
1
"
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
a
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
s
x
(
a
.
s
t
a
r
t
)
}
 
y
=
{
3
0
 
+
 
i
 
*
 
r
o
w
H
}
 
w
i
d
t
h
=
{
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
,
 
s
x
(
a
.
e
n
d
)
 
-
 
s
x
(
a
.
s
t
a
r
t
)
)
}
 
h
e
i
g
h
t
=
{
r
o
w
H
 
-
 
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}
 
r
x
=
{
4
}
 
s
t
r
o
k
e
=
"
#
f
f
f
"
 
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
,
 
o
p
a
c
i
t
y
:
 
s
t
 
=
=
=
 
"
s
k
i
p
p
e
d
"
 
?
 
0
.
5
5
 
:
 
1
 
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
s
x
(
a
.
s
t
a
r
t
)
 
+
 
4
}
 
y
=
{
3
0
 
+
 
i
 
*
 
r
o
w
H
 
+
 
1
4
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
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
 
f
i
l
l
=
"
#
f
f
f
"
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
i
d
}
:
 
[
{
a
.
s
t
a
r
t
}
,
{
a
.
e
n
d
}
]


 
 
 
 
 
 
 
 
 
 
 
 
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
 
 
F
R
A
C
T
I
O
N
A
L
 
K
N
A
P
S
A
C
K
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
K
I
t
e
m
 
{
 
i
d
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
v
:
 
n
u
m
b
e
r
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
 
K
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


 
 
i
t
e
m
s
:
 
(
K
I
t
e
m
 
&
 
{
 
r
a
t
i
o
:
 
n
u
m
b
e
r
 
}
)
[
]
;


 
 
t
a
k
e
n
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


 
 
c
a
p
L
e
f
t
:
 
n
u
m
b
e
r
;


 
 
c
a
p
T
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
V
a
l
:
 
n
u
m
b
e
r
;


 
 
a
c
t
i
v
e
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
K
N
 
=
 
[
"
s
o
r
t
 
i
t
e
m
s
 
b
y
 
v
a
l
u
e
/
w
e
i
g
h
t
 
r
a
t
i
o
 
(
d
e
s
c
)
"
,
 
"
c
a
p
L
e
f
t
 
←
 
W
;
 
v
a
l
u
e
 
←
 
0
"
,
 
"
f
o
r
 
e
a
c
h
 
i
t
e
m
 
i
 
i
n
 
o
r
d
e
r
:
"
,
 
"
 
 
i
f
 
c
a
p
L
e
f
t
 
>
=
 
i
.
w
:
 
t
a
k
e
 
a
l
l
"
,
 
"
 
 
e
l
s
e
:
 
t
a
k
e
 
f
r
a
c
t
i
o
n
 
c
a
p
L
e
f
t
 
/
 
i
.
w
"
,
 
"
 
 
u
p
d
a
t
e
 
c
a
p
L
e
f
t
,
 
v
a
l
u
e
"
]
;




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
I
t
e
m
s
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
 
K
I
t
e
m
[
]
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
s
.
t
r
i
m
(
)
.
s
p
l
i
t
(
/
\
s
+
/
)
;


 
 
c
o
n
s
t
 
o
u
t
:
 
K
I
t
e
m
[
]
 
=
 
[
]
;


 
 
l
e
t
 
i
d
 
=
 
0
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
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
x
)
 
=
>
 
N
u
m
b
e
r
(
x
)
)
;


 
 
 
 
i
f
 
(
m
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
 
2
 
&
&
 
!
m
.
s
o
m
e
(
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
)
)
 
o
u
t
.
p
u
s
h
(
{
 
i
d
:
 
i
d
+
+
,
 
w
:
 
m
[
0
]
,
 
v
:
 
m
[
1
]
 
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
 
o
u
t
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
K
n
a
p
s
a
c
k
(
i
t
e
m
s
:
 
K
I
t
e
m
[
]
,
 
W
:
 
n
u
m
b
e
r
)
:
 
K
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
 
s
o
r
t
e
d
 
=
 
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
i
t
)
 
=
>
 
(
{
 
.
.
.
i
t
,
 
r
a
t
i
o
:
 
i
t
.
v
 
/
 
i
t
.
w
 
}
)
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
.
r
a
t
i
o
 
-
 
a
.
r
a
t
i
o
)
;


 
 
c
o
n
s
t
 
t
a
k
e
n
 
=
 
s
o
r
t
e
d
.
m
a
p
(
(
)
 
=
>
 
0
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
:
 
K
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


 
 
l
e
t
 
c
a
p
L
e
f
t
 
=
 
W
;


 
 
l
e
t
 
t
o
t
a
l
V
a
l
 
=
 
0
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
 
v
a
r
s
:
 
{
 
n
:
 
s
o
r
t
e
d
.
l
e
n
g
t
h
,
 
W
 
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
 
"
S
o
r
t
 
i
t
e
m
s
 
b
y
 
v
a
l
u
e
-
t
o
-
w
e
i
g
h
t
 
r
a
t
i
o
 
(
h
i
g
h
e
s
t
 
f
i
r
s
t
)
.
"
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
 
}
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
 
1
,
 
v
a
r
s
:
 
{
 
c
a
p
L
e
f
t
,
 
v
a
l
u
e
:
 
0
 
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
a
p
a
c
i
t
y
 
=
 
$
{
W
}
,
 
t
o
t
a
l
 
v
a
l
u
e
 
=
 
0
 
s
o
 
f
a
r
.
`
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
 
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
 
i
 
=
 
0
;
 
i
 
<
 
s
o
r
t
e
d
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
 
i
t
 
=
 
s
o
r
t
e
d
[
i
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
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
w
:
 
i
t
.
w
,
 
v
:
 
i
t
.
v
,
 
r
a
t
i
o
:
 
i
t
.
r
a
t
i
o
.
t
o
F
i
x
e
d
(
2
)
,
 
c
a
p
L
e
f
t
 
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
a
m
i
n
e
 
i
t
e
m
 
$
{
i
t
.
i
d
}
:
 
w
=
$
{
i
t
.
w
}
,
 
v
=
$
{
i
t
.
v
}
,
 
r
a
t
i
o
=
$
{
i
t
.
r
a
t
i
o
.
t
o
F
i
x
e
d
(
2
)
}
.
`
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
,
 
a
c
t
i
v
e
:
 
i
 
}
)
;


 
 
 
 
i
f
 
(
c
a
p
L
e
f
t
 
>
=
 
i
t
.
w
)
 
{


 
 
 
 
 
 
t
a
k
e
n
[
i
]
 
=
 
1
;


 
 
 
 
 
 
t
o
t
a
l
V
a
l
 
+
=
 
i
t
.
v
;


 
 
 
 
 
 
c
a
p
L
e
f
t
 
-
=
 
i
t
.
w
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
 
3
,
 
v
a
r
s
:
 
{
 
t
a
k
e
:
 
"
1
.
0
0
"
,
 
v
a
l
u
e
:
 
t
o
t
a
l
V
a
l
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
,
 
c
a
p
L
e
f
t
 
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
a
p
a
c
i
t
y
 
a
l
l
o
w
s
 
i
t
.
 
T
a
k
e
 
t
h
e
 
f
u
l
l
 
i
t
e
m
.
 
V
a
l
u
e
 
+
=
 
$
{
i
t
.
v
}
.
`
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
,
 
a
c
t
i
v
e
:
 
i
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
c
a
p
L
e
f
t
 
>
 
0
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
f
r
a
c
 
=
 
c
a
p
L
e
f
t
 
/
 
i
t
.
w
;


 
 
 
 
 
 
c
o
n
s
t
 
g
a
i
n
 
=
 
f
r
a
c
 
*
 
i
t
.
v
;


 
 
 
 
 
 
t
a
k
e
n
[
i
]
 
=
 
f
r
a
c
;


 
 
 
 
 
 
t
o
t
a
l
V
a
l
 
+
=
 
g
a
i
n
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
 
v
a
r
s
:
 
{
 
f
r
a
c
:
 
f
r
a
c
.
t
o
F
i
x
e
d
(
2
)
,
 
g
a
i
n
:
 
g
a
i
n
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
,
 
v
a
l
u
e
:
 
t
o
t
a
l
V
a
l
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
N
o
t
 
e
n
o
u
g
h
 
c
a
p
a
c
i
t
y
.
 
T
a
k
e
 
f
r
a
c
t
i
o
n
 
$
{
f
r
a
c
.
t
o
F
i
x
e
d
(
2
)
}
 
→
 
v
a
l
u
e
 
+
=
 
$
{
g
a
i
n
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
}
.
`
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
:
 
0
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
,
 
a
c
t
i
v
e
:
 
i
 
}
)
;


 
 
 
 
 
 
c
a
p
L
e
f
t
 
=
 
0
;


 
 
 
 
 
 
b
r
e
a
k
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
 
4
,
 
v
a
r
s
:
 
{
 
s
k
i
p
:
 
1
 
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
 
"
K
n
a
p
s
a
c
k
 
i
s
 
f
u
l
l
.
 
S
k
i
p
 
r
e
m
a
i
n
i
n
g
 
i
t
e
m
s
.
"
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
,
 
a
c
t
i
v
e
:
 
i
 
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
 
5
,
 
v
a
r
s
:
 
{
 
t
o
t
a
l
V
a
l
u
e
:
 
t
o
t
a
l
V
a
l
.
t
o
F
i
x
e
d
(
2
)
 
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
D
o
n
e
.
 
M
a
x
i
m
u
m
 
v
a
l
u
e
 
=
 
$
{
t
o
t
a
l
V
a
l
.
t
o
F
i
x
e
d
(
2
)
}
.
`
,
 
i
t
e
m
s
:
 
s
o
r
t
e
d
,
 
t
a
k
e
n
:
 
[
.
.
.
t
a
k
e
n
]
,
 
c
a
p
L
e
f
t
,
 
c
a
p
T
o
t
a
l
:
 
W
,
 
t
o
t
a
l
V
a
l
 
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
 
K
n
a
p
s
a
c
k
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
K
F
r
a
m
e
 
}
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
g
r
i
d
 
g
a
p
-
6
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
4
0
p
x
"
 
}
}
>


 
 
 
 
 
 
<
d
i
v
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
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
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
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
#
"
,
 
"
w
e
i
g
h
t
"
,
 
"
v
a
l
u
e
"
,
 
"
v
/
w
"
,
 
"
t
a
k
e
n
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
k
e
y
=
{
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
3
 
p
y
-
2
.
5
 
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
"
>
{
h
}
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
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
i
t
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
 
i
s
A
c
t
i
v
e
 
=
 
f
r
a
m
e
.
a
c
t
i
v
e
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
 
=
 
f
r
a
m
e
.
t
a
k
e
n
[
i
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
u
l
l
y
T
a
k
e
n
 
=
 
t
 
=
=
=
 
1
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
t
i
a
l
 
=
 
t
 
>
 
0
 
&
&
 
t
 
<
 
1
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
i
t
.
i
d
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
s
t
o
n
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
5
 
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
5
"
 
:
 
f
u
l
l
y
T
a
k
e
n
 
?
 
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
4
0
0
/
5
"
 
:
 
p
a
r
t
i
a
l
 
?
 
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
4
0
0
/
5
"
 
:
 
"
"
}
`
}
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
3
 
p
y
-
2
 
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
7
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
"
>
{
i
t
.
i
d
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
3
 
p
y
-
2
 
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
1
0
0
"
>
{
i
t
.
w
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
3
 
p
y
-
2
 
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
1
0
0
"
>
{
i
t
.
v
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
3
 
p
y
-
2
 
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
7
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
"
>
{
i
t
.
r
a
t
i
o
.
t
o
F
i
x
e
d
(
2
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
{
`
p
x
-
3
 
p
y
-
2
 
f
o
n
t
-
b
o
l
d
 
$
{
f
u
l
l
y
T
a
k
e
n
 
?
 
"
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
"
 
:
 
p
a
r
t
i
a
l
 
?
 
"
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
"
 
:
 
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
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
t
o
F
i
x
e
d
(
2
)
}
{
t
 
>
 
0
 
&
&
 
t
 
<
 
1
 
&
&
 
"
 
(
s
l
i
c
e
)
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
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
m
t
-
2
 
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
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
T
o
t
a
l
 
v
a
l
u
e
:
 
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
e
m
e
r
a
l
d
-
6
0
0
"
>
{
f
r
a
m
e
.
t
o
t
a
l
V
a
l
.
t
o
F
i
x
e
d
(
2
)
}
<
/
s
t
r
o
n
g
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
2
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
t
o
n
e
-
5
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
"
>
K
n
a
p
s
a
c
k
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
e
l
a
t
i
v
e
 
w
-
2
0
 
h
-
4
8
 
b
o
r
d
e
r
-
2
 
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
b
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
 
b
o
t
t
o
m
-
0
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
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
0
 
o
p
a
c
i
t
y
-
7
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
 
`
$
{
1
0
0
 
-
 
(
f
r
a
m
e
.
c
a
p
L
e
f
t
 
/
 
f
r
a
m
e
.
c
a
p
T
o
t
a
l
)
 
*
 
1
0
0
}
%
`
 
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
"
>
u
s
e
d
 
{
f
r
a
m
e
.
c
a
p
T
o
t
a
l
 
-
 
f
r
a
m
e
.
c
a
p
L
e
f
t
}
 
/
 
{
f
r
a
m
e
.
c
a
p
T
o
t
a
l
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
 
 
H
U
F
F
M
A
N
 
C
O
D
I
N
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




i
n
t
e
r
f
a
c
e
 
H
N
o
d
e
 
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
;
 
f
r
e
q
:
 
n
u
m
b
e
r
;
 
c
h
a
r
?
:
 
s
t
r
i
n
g
;
 
l
e
f
t
?
:
 
s
t
r
i
n
g
;
 
r
i
g
h
t
?
:
 
s
t
r
i
n
g
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
 
H
u
f
f
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


 
 
h
e
a
p
:
 
s
t
r
i
n
g
[
]
;


 
 
n
o
d
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
s
t
r
i
n
g
,
 
H
N
o
d
e
>
;


 
 
m
e
r
g
e
d
?
:
 
[
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
,
 
s
t
r
i
n
g
]
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
H
U
F
F
 
=
 
[
"
c
r
e
a
t
e
 
l
e
a
f
 
n
o
d
e
 
p
e
r
 
c
h
a
r
 
w
i
t
h
 
i
t
s
 
f
r
e
q
"
,
 
"
p
u
t
 
a
l
l
 
l
e
a
v
e
s
 
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
"
,
 
"
w
h
i
l
e
 
h
e
a
p
 
h
a
s
 
>
 
1
 
n
o
d
e
s
:
"
,
 
"
 
 
x
 
←
 
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
;
 
y
 
←
 
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
"
,
 
"
 
 
z
 
←
 
n
e
w
 
n
o
d
e
(
f
r
e
q
 
=
 
x
.
f
r
e
q
 
+
 
y
.
f
r
e
q
)
"
,
 
"
 
 
z
.
l
e
f
t
 
=
 
x
;
 
z
.
r
i
g
h
t
 
=
 
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
 
z
"
]
;




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
u
f
f
m
a
n
(
f
r
e
q
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
 
n
u
m
b
e
r
>
)
:
 
H
u
f
f
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
 
n
o
d
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
s
t
r
i
n
g
,
 
H
N
o
d
e
>
 
=
 
{
}
;


 
 
l
e
t
 
c
o
u
n
t
e
r
 
=
 
0
;


 
 
f
o
r
 
(
c
o
n
s
t
 
[
c
h
,
 
f
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
f
r
e
q
s
)
)
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
`
l
e
a
f
-
$
{
c
h
}
`
;


 
 
 
 
n
o
d
e
s
[
i
d
]
 
=
 
{
 
i
d
,
 
f
r
e
q
:
 
f
,
 
c
h
a
r
:
 
c
h
 
}
;


 
 
}


 
 
c
o
n
s
t
 
h
e
a
p
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
 
O
b
j
e
c
t
.
k
e
y
s
(
n
o
d
e
s
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
n
o
d
e
s
[
a
]
.
f
r
e
q
 
-
 
n
o
d
e
s
[
b
]
.
f
r
e
q
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
:
 
H
u
f
f
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
 
v
a
r
s
:
 
{
 
l
e
a
v
e
s
:
 
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
 
"
C
r
e
a
t
e
 
l
e
a
f
 
n
o
d
e
s
 
f
o
r
 
e
a
c
h
 
c
h
a
r
a
c
t
e
r
 
w
i
t
h
 
i
t
s
 
f
r
e
q
u
e
n
c
y
.
"
,
 
h
e
a
p
:
 
[
.
.
.
h
e
a
p
]
,
 
n
o
d
e
s
:
 
J
S
O
N
.
p
a
r
s
e
(
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
o
d
e
s
)
)
 
}
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
 
1
,
 
v
a
r
s
:
 
{
 
h
e
a
p
:
 
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
 
"
P
u
s
h
 
a
l
l
 
l
e
a
v
e
s
 
i
n
t
o
 
a
 
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
 
f
r
e
q
u
e
n
c
y
.
"
,
 
h
e
a
p
:
 
[
.
.
.
h
e
a
p
]
,
 
n
o
d
e
s
:
 
J
S
O
N
.
p
a
r
s
e
(
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
o
d
e
s
)
)
 
}
)
;


 
 
w
h
i
l
e
 
(
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
 
>
 
1
)
 
{


 
 
 
 
h
e
a
p
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
n
o
d
e
s
[
a
]
.
f
r
e
q
 
-
 
n
o
d
e
s
[
b
]
.
f
r
e
q
)
;


 
 
 
 
c
o
n
s
t
 
x
 
=
 
h
e
a
p
.
s
h
i
f
t
(
)
!
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
h
e
a
p
.
s
h
i
f
t
(
)
!
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
 
3
,
 
v
a
r
s
:
 
{
 
x
:
 
n
o
d
e
s
[
x
]
.
c
h
a
r
 
?
?
 
"
·
"
,
 
f
x
:
 
n
o
d
e
s
[
x
]
.
f
r
e
q
,
 
y
:
 
n
o
d
e
s
[
y
]
.
c
h
a
r
 
?
?
 
"
·
"
,
 
f
y
:
 
n
o
d
e
s
[
y
]
.
f
r
e
q
 
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
 
t
w
o
 
s
m
a
l
l
e
s
t
:
 
$
{
n
o
d
e
s
[
x
]
.
c
h
a
r
 
?
?
 
"
·
"
}
=
$
{
n
o
d
e
s
[
x
]
.
f
r
e
q
}
,
 
$
{
n
o
d
e
s
[
y
]
.
c
h
a
r
 
?
?
 
"
·
"
}
=
$
{
n
o
d
e
s
[
y
]
.
f
r
e
q
}
.
`
,
 
h
e
a
p
:
 
[
.
.
.
h
e
a
p
]
,
 
n
o
d
e
s
:
 
J
S
O
N
.
p
a
r
s
e
(
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
o
d
e
s
)
)
 
}
)
;


 
 
 
 
c
o
n
s
t
 
z
I
d
 
=
 
`
n
$
{
c
o
u
n
t
e
r
+
+
}
`
;


 
 
 
 
n
o
d
e
s
[
z
I
d
]
 
=
 
{
 
i
d
:
 
z
I
d
,
 
f
r
e
q
:
 
n
o
d
e
s
[
x
]
.
f
r
e
q
 
+
 
n
o
d
e
s
[
y
]
.
f
r
e
q
,
 
l
e
f
t
:
 
x
,
 
r
i
g
h
t
:
 
y
 
}
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
 
v
a
r
s
:
 
{
 
s
u
m
:
 
n
o
d
e
s
[
z
I
d
]
.
f
r
e
q
 
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
r
e
a
t
e
 
p
a
r
e
n
t
 
w
i
t
h
 
f
r
e
q
 
=
 
$
{
n
o
d
e
s
[
x
]
.
f
r
e
q
}
 
+
 
$
{
n
o
d
e
s
[
y
]
.
f
r
e
q
}
 
=
 
$
{
n
o
d
e
s
[
z
I
d
]
.
f
r
e
q
}
.
`
,
 
h
e
a
p
:
 
[
.
.
.
h
e
a
p
,
 
z
I
d
]
,
 
n
o
d
e
s
:
 
J
S
O
N
.
p
a
r
s
e
(
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
o
d
e
s
)
)
,
 
m
e
r
g
e
d
:
 
[
x
,
 
y
,
 
z
I
d
]
 
}
)
;


 
 
 
 
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
z
I
d
)
;


 
 
 
 
h
e
a
p
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
n
o
d
e
s
[
a
]
.
f
r
e
q
 
-
 
n
o
d
e
s
[
b
]
.
f
r
e
q
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
 
6
,
 
v
a
r
s
:
 
{
 
h
e
a
p
:
 
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
 
"
I
n
s
e
r
t
 
t
h
e
 
n
e
w
 
n
o
d
e
 
b
a
c
k
 
i
n
t
o
 
t
h
e
 
h
e
a
p
.
"
,
 
h
e
a
p
:
 
[
.
.
.
h
e
a
p
]
,
 
n
o
d
e
s
:
 
J
S
O
N
.
p
a
r
s
e
(
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
o
d
e
s
)
)
 
}
)
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
 
6
,
 
v
a
r
s
:
 
{
 
r
o
o
t
:
 
h
e
a
p
[
0
]
 
?
 
n
o
d
e
s
[
h
e
a
p
[
0
]
]
.
f
r
e
q
 
:
 
0
 
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
 
"
O
n
l
y
 
r
o
o
t
 
r
e
m
a
i
n
s
.
 
B
u
i
l
d
 
c
o
d
e
s
 
b
y
 
t
r
a
v
e
r
s
i
n
g
:
 
l
e
f
t
=
0
,
 
r
i
g
h
t
=
1
.
"
,
 
h
e
a
p
:
 
[
.
.
.
h
e
a
p
]
,
 
n
o
d
e
s
:
 
J
S
O
N
.
p
a
r
s
e
(
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
o
d
e
s
)
)
 
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
 
h
u
f
f
m
a
n
C
o
d
e
s
(
n
o
d
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
s
t
r
i
n
g
,
 
H
N
o
d
e
>
,
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
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
)
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
>
 
{


 
 
i
f
 
(
!
r
o
o
t
I
d
 
|
|
 
!
n
o
d
e
s
[
r
o
o
t
I
d
]
)
 
r
e
t
u
r
n
 
{
}
;


 
 
c
o
n
s
t
 
c
o
d
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
>
 
=
 
{
}
;


 
 
f
u
n
c
t
i
o
n
 
g
o
(
i
d
:
 
s
t
r
i
n
g
,
 
c
o
d
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


 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
i
f
 
(
!
n
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
n
.
c
h
a
r
 
!
=
=
 
u
n
d
e
f
i
n
e
d
)
 
{
 
c
o
d
e
s
[
n
.
c
h
a
r
]
 
=
 
c
o
d
e
 
|
|
 
"
0
"
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
n
.
l
e
f
t
)
 
g
o
(
n
.
l
e
f
t
,
 
c
o
d
e
 
+
 
"
0
"
)
;


 
 
 
 
i
f
 
(
n
.
r
i
g
h
t
)
 
g
o
(
n
.
r
i
g
h
t
,
 
c
o
d
e
 
+
 
"
1
"
)
;


 
 
}


 
 
g
o
(
r
o
o
t
I
d
,
 
"
"
)
;


 
 
r
e
t
u
r
n
 
c
o
d
e
s
;


}




/
/
 
L
o
c
a
l
 
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
 
r
e
n
d
e
r
e
r
 
f
o
r
 
H
u
f
f
m
a
n


f
u
n
c
t
i
o
n
 
H
u
f
f
m
a
n
T
r
e
e
S
V
G
(
{
 
n
o
d
e
s
,
 
r
o
o
t
I
d
 
}
:
 
{
 
n
o
d
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
s
t
r
i
n
g
,
 
H
N
o
d
e
>
;
 
r
o
o
t
I
d
?
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
i
f
 
(
!
r
o
o
t
I
d
 
|
|
 
!
n
o
d
e
s
[
r
o
o
t
I
d
]
)
 
r
e
t
u
r
n
 
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
4
0
0
 
p
-
4
 
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
"
>
B
u
i
l
d
i
n
g
 
t
r
e
e
.
.
.
<
/
d
i
v
>
;




 
 
c
o
n
s
t
 
W
 
=
 
4
2
0
,
 
n
o
d
e
R
 
=
 
1
8
;


 
 
t
y
p
e
 
P
o
s
 
=
 
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
;


 
 
c
o
n
s
t
 
p
o
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
 
P
o
s
>
 
=
 
{
}
;




 
 
/
/
 
A
s
s
i
g
n
 
p
o
s
i
t
i
o
n
s
 
v
i
a
 
s
u
b
t
r
e
e
-
w
i
d
t
h
 
l
a
y
o
u
t


 
 
f
u
n
c
t
i
o
n
 
w
i
d
t
h
(
i
d
:
 
s
t
r
i
n
g
 
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
)
:
 
n
u
m
b
e
r
 
{


 
 
 
 
i
f
 
(
!
i
d
 
|
|
 
!
n
o
d
e
s
[
i
d
]
)
 
r
e
t
u
r
n
 
0
;


 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
i
f
 
(
!
n
.
l
e
f
t
 
&
&
 
!
n
.
r
i
g
h
t
)
 
r
e
t
u
r
n
 
1
;


 
 
 
 
r
e
t
u
r
n
 
w
i
d
t
h
(
n
.
l
e
f
t
)
 
+
 
w
i
d
t
h
(
n
.
r
i
g
h
t
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
 
p
l
a
c
e
(
i
d
:
 
s
t
r
i
n
g
,
 
x
:
 
n
u
m
b
e
r
,
 
y
:
 
n
u
m
b
e
r
,
 
s
p
a
n
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
i
d
]
)
 
r
e
t
u
r
n
;


 
 
 
 
p
o
s
[
i
d
]
 
=
 
{
 
x
,
 
y
 
}
;


 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
i
f
 
(
n
.
l
e
f
t
 
|
|
 
n
.
r
i
g
h
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
l
w
 
=
 
w
i
d
t
h
(
n
.
l
e
f
t
)
;


 
 
 
 
 
 
c
o
n
s
t
 
r
w
 
=
 
w
i
d
t
h
(
n
.
r
i
g
h
t
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
 
=
 
l
w
 
+
 
r
w
;


 
 
 
 
 
 
i
f
 
(
n
.
l
e
f
t
)
 
p
l
a
c
e
(
n
.
l
e
f
t
,
 
x
 
-
 
s
p
a
n
 
*
 
(
r
w
 
/
 
t
o
t
a
l
)
,
 
y
 
+
 
5
2
,
 
s
p
a
n
 
*
 
(
l
w
 
/
 
t
o
t
a
l
)
)
;


 
 
 
 
 
 
i
f
 
(
n
.
r
i
g
h
t
)
 
p
l
a
c
e
(
n
.
r
i
g
h
t
,
 
x
 
+
 
s
p
a
n
 
*
 
(
l
w
 
/
 
t
o
t
a
l
)
,
 
y
 
+
 
5
2
,
 
s
p
a
n
 
*
 
(
r
w
 
/
 
t
o
t
a
l
)
)
;


 
 
 
 
}


 
 
}


 
 
p
l
a
c
e
(
r
o
o
t
I
d
,
 
W
 
/
 
2
,
 
2
8
,
 
W
 
/
 
2
 
-
 
n
o
d
e
R
 
-
 
4
)
;




 
 
c
o
n
s
t
 
a
l
l
I
d
s
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
p
o
s
)
;


 
 
c
o
n
s
t
 
m
a
x
Y
 
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
l
l
I
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
p
o
s
[
i
d
]
.
y
)
)
 
+
 
n
o
d
e
R
 
+
 
1
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
W
}
 
$
{
m
a
x
Y
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
w
-
f
u
l
l
 
h
-
a
u
t
o
 
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
"
>


 
 
 
 
 
 
{
a
l
l
I
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
n
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
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
[
]
;


 
 
 
 
 
 
 
 
i
f
 
(
n
.
l
e
f
t
 
&
&
 
p
o
s
[
n
.
l
e
f
t
]
)
 
e
d
g
e
s
.
p
u
s
h
(
{
 
t
o
:
 
p
o
s
[
n
.
l
e
f
t
]
,
 
l
b
l
:
 
"
0
"
 
}
)
;


 
 
 
 
 
 
 
 
i
f
 
(
n
.
r
i
g
h
t
 
&
&
 
p
o
s
[
n
.
r
i
g
h
t
]
)
 
e
d
g
e
s
.
p
u
s
h
(
{
 
t
o
:
 
p
o
s
[
n
.
r
i
g
h
t
]
,
 
l
b
l
:
 
"
1
"
 
}
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
e
d
g
e
s
.
m
a
p
(
(
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
`
$
{
i
d
}
-
e
$
{
i
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
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
.
x
}
 
y
1
=
{
p
.
y
 
+
 
n
o
d
e
R
}
 
x
2
=
{
e
.
t
o
.
x
}
 
y
2
=
{
e
.
t
o
.
y
 
-
 
n
o
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
(
p
.
x
 
+
 
e
.
t
o
.
x
)
 
/
 
2
 
+
 
(
i
 
=
=
=
 
0
 
?
 
-
8
 
:
 
8
)
}
 
y
=
{
(
p
.
y
 
+
 
e
.
t
o
.
y
)
 
/
 
2
}
 
f
o
n
t
S
i
z
e
=
"
9
"
 
f
i
l
l
=
{
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
M
u
t
e
d
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
>
{
e
.
l
b
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
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
a
l
l
I
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
n
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
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
L
e
a
f
 
=
 
n
.
c
h
a
r
 
!
=
=
 
u
n
d
e
f
i
n
e
d
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
i
d
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
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
n
o
d
e
R
}
 
f
i
l
l
=
{
i
s
L
e
a
f
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
"
#
3
b
8
2
f
6
"
}
 
s
t
r
o
k
e
=
"
#
f
f
f
"
 
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
.
x
}
 
y
=
{
p
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
"
9
"
 
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
"
#
f
f
f
"
 
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
h
e
a
d
i
n
g
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
e
a
f
 
?
 
`
$
{
n
.
c
h
a
r
}
:
$
{
n
.
f
r
e
q
}
`
 
:
 
n
.
f
r
e
q
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
 
H
u
f
f
m
a
n
V
i
e
w
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
H
u
f
f
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
r
o
o
t
I
d
 
=
 
f
r
a
m
e
.
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
 
=
=
=
 
1
 
?
 
f
r
a
m
e
.
h
e
a
p
[
0
]
 
:
 
O
b
j
e
c
t
.
k
e
y
s
(
f
r
a
m
e
.
n
o
d
e
s
)
.
f
i
l
t
e
r
(
(
i
d
)
 
=
>
 
i
d
.
s
t
a
r
t
s
W
i
t
h
(
"
n
"
)
)
.
s
o
r
t
(
)
.
p
o
p
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
d
e
s
 
=
 
r
o
o
t
I
d
 
?
 
h
u
f
f
m
a
n
C
o
d
e
s
(
f
r
a
m
e
.
n
o
d
e
s
,
 
r
o
o
t
I
d
)
 
:
 
{
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
a
p
-
4
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
8
0
p
x
"
 
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
<
H
u
f
f
m
a
n
T
r
e
e
S
V
G
 
n
o
d
e
s
=
{
f
r
a
m
e
.
n
o
d
e
s
}
 
r
o
o
t
I
d
=
{
r
o
o
t
I
d
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
t
o
n
e
-
5
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
 
m
b
-
1
"
>
H
e
a
p
 
(
m
i
n
 
b
y
 
f
r
e
q
)
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
w
r
a
p
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
h
e
a
p
.
m
a
p
(
(
i
d
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
i
d
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
m
d
 
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
7
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
?
.
c
h
a
r
 
?
?
 
"
·
"
}
:
{
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
?
.
f
r
e
q
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
/
d
i
v
>


 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
k
e
y
s
(
c
o
d
e
s
)
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
t
o
n
e
-
5
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
 
m
b
-
1
"
>
C
o
d
e
s
<
/
d
i
v
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
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
c
o
d
e
s
)
.
s
o
r
t
(
)
.
m
a
p
(
(
[
c
h
,
 
c
]
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
c
h
}
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
r
-
3
 
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
1
0
0
"
>
{
c
h
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
7
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
"
>
{
c
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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




t
y
p
e
 
M
o
d
e
 
=
 
"
a
c
t
i
v
i
t
y
"
 
|
 
"
k
n
a
p
s
a
c
k
"
 
|
 
"
h
u
f
f
m
a
n
"
;




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
m
o
d
e
,
 
s
e
t
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
<
M
o
d
e
>
(
"
a
c
t
i
v
i
t
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
a
c
t
I
n
p
u
t
,
 
s
e
t
A
c
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
,
4
 
3
,
5
 
0
,
6
 
5
,
7
 
3
,
9
 
5
,
9
 
6
,
1
0
 
8
,
1
1
 
8
,
1
2
 
2
,
1
4
 
1
2
,
1
6
"
)
;


 
 
c
o
n
s
t
 
a
c
t
i
v
i
t
i
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
 
p
a
r
s
e
A
c
t
i
v
i
t
i
e
s
(
a
c
t
I
n
p
u
t
)
,
 
[
a
c
t
I
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
 
a
c
t
F
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
 
b
u
i
l
d
A
c
t
i
v
i
t
y
S
e
l
(
a
c
t
i
v
i
t
i
e
s
)
,
 
[
a
c
t
i
v
i
t
i
e
s
]
)
;




 
 
c
o
n
s
t
 
[
k
I
n
p
u
t
,
 
s
e
t
K
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
6
0
 
2
0
,
1
0
0
 
3
0
,
1
2
0
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
C
a
p
,
 
s
e
t
K
C
a
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
(
"
5
0
"
)
;


 
 
c
o
n
s
t
 
k
I
t
e
m
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
 
p
a
r
s
e
I
t
e
m
s
(
k
I
n
p
u
t
)
,
 
[
k
I
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
 
k
W
 
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
1
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
N
u
m
b
e
r
(
k
C
a
p
)
 
|
|
 
5
0
)
)
;


 
 
c
o
n
s
t
 
k
F
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
 
b
u
i
l
d
K
n
a
p
s
a
c
k
(
k
I
t
e
m
s
,
 
k
W
)
,
 
[
k
I
t
e
m
s
,
 
k
W
]
)
;




 
 
c
o
n
s
t
 
[
h
S
t
r
,
 
s
e
t
H
S
t
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
a
:
5
 
b
:
9
 
c
:
1
2
 
d
:
1
3
 
e
:
1
6
 
f
:
4
5
"
)
;


 
 
c
o
n
s
t
 
f
r
e
q
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


 
 
 
 
c
o
n
s
t
 
o
u
t
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
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
 
 
h
S
t
r
.
t
r
i
m
(
)
.
s
p
l
i
t
(
/
\
s
+
/
)
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
 
[
c
h
,
 
f
]
 
=
 
t
.
s
p
l
i
t
(
"
:
"
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
N
u
m
b
e
r
(
f
)
;


 
 
 
 
 
 
i
f
 
(
c
h
 
&
&
 
!
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
 
o
u
t
[
c
h
]
 
=
 
n
;


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
o
u
t
;


 
 
}
,
 
[
h
S
t
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
F
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
 
b
u
i
l
d
H
u
f
f
m
a
n
(
f
r
e
q
s
)
,
 
[
f
r
e
q
s
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
A
 
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
a
c
t
F
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
 
p
l
a
y
e
r
K
 
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
k
F
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
 
p
l
a
y
e
r
H
 
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
h
F
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
 
m
o
d
e
T
a
b
s
 
=
 
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
"
>


 
 
 
 
 
 
{
(
[
[
"
a
c
t
i
v
i
t
y
"
,
 
"
A
c
t
i
v
i
t
y
 
S
e
l
e
c
t
i
o
n
"
]
,
 
[
"
k
n
a
p
s
a
c
k
"
,
 
"
F
r
a
c
t
i
o
n
a
l
 
K
n
a
p
s
a
c
k
"
]
,
 
[
"
h
u
f
f
m
a
n
"
,
 
"
H
u
f
f
m
a
n
 
C
o
d
i
n
g
"
]
]
 
a
s
 
[
M
o
d
e
,
 
s
t
r
i
n
g
]
[
]
)
.
m
a
p
(
(
[
m
,
 
l
a
b
e
l
]
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
M
o
d
e
(
m
)
}
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
m
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
x
s
"
>
{
l
a
b
e
l
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


 
 
)
;




 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
a
c
t
i
v
i
t
y
"
)
 
{


 
 
 
 
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
A
.
c
u
r
r
e
n
t
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
"
A
c
t
i
v
i
t
y
 
S
e
l
e
c
t
i
o
n
 
-
 
G
r
e
e
d
y
 
b
y
 
f
i
n
i
s
h
 
t
i
m
e
"
 
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
A
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
{
m
o
d
e
T
a
b
s
}
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
A
c
t
i
v
i
t
i
e
s
 
(
s
t
a
r
t
,
e
n
d
)
"
 
v
a
l
u
e
=
{
a
c
t
I
n
p
u
t
}
 
h
e
l
p
e
r
=
"
C
l
a
s
s
i
c
 
g
r
e
e
d
y
:
 
s
o
r
t
 
b
y
 
e
n
d
,
 
p
i
c
k
 
n
o
n
-
o
v
e
r
l
a
p
p
i
n
g
.
"
 
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
 
1
1
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
4
 
3
,
5
 
0
,
6
 
5
,
7
 
3
,
9
 
5
,
9
 
6
,
1
0
 
8
,
1
1
 
8
,
1
2
 
2
,
1
4
 
1
2
,
1
6
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
l
l
 
o
v
e
r
l
a
p
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
1
0
 
2
,
9
 
3
,
8
 
4
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
C
h
a
i
n
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
3
 
3
,
5
 
5
,
7
 
7
,
9
"
 
}
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
s
e
t
A
c
t
I
n
p
u
t
}
 
/
>
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
P
S
E
U
D
O
_
A
S
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
 
f
l
a
s
h
K
e
y
s
=
{
[
"
l
a
s
t
E
n
d
"
,
 
"
p
i
c
k
e
d
"
]
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
 
g
a
p
-
3
 
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
i
n
l
i
n
e
-
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
w
-
2
.
5
 
h
-
2
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
s
m
 
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
0
"
 
/
>
p
i
c
k
e
d
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
i
n
l
i
n
e
-
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
w
-
2
.
5
 
h
-
2
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
s
m
 
b
g
-
r
e
d
-
4
0
0
"
 
/
>
s
k
i
p
p
e
d
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
i
n
l
i
n
e
-
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
w
-
2
.
5
 
h
-
2
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
s
m
 
b
g
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
"
 
/
>
c
h
e
c
k
i
n
g
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


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
A
c
t
i
v
i
t
y
T
i
m
e
l
i
n
e
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}


 
 
 
 
 
 
 
 
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




 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
k
n
a
p
s
a
c
k
"
)
 
{


 
 
 
 
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
K
.
c
u
r
r
e
n
t
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
"
F
r
a
c
t
i
o
n
a
l
 
K
n
a
p
s
a
c
k
 
-
 
G
r
e
e
d
y
 
b
y
 
r
a
t
i
o
"
 
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
K
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
{
m
o
d
e
T
a
b
s
}
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
t
e
m
s
 
(
w
e
i
g
h
t
,
v
a
l
u
e
)
"
 
v
a
l
u
e
=
{
k
I
n
p
u
t
}
 
h
e
l
p
e
r
=
"
E
a
c
h
 
t
o
k
e
n
 
=
 
w
e
i
g
h
t
,
v
a
l
u
e
.
 
F
r
a
c
t
i
o
n
a
l
 
k
n
a
p
s
a
c
k
 
a
l
l
o
w
s
 
s
l
i
c
i
n
g
 
t
h
e
 
l
a
s
t
 
i
t
e
m
.
"
 
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
6
0
 
2
0
,
1
0
0
 
3
0
,
1
2
0
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
H
i
g
h
 
r
a
t
i
o
s
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
,
3
0
 
1
0
,
5
0
 
1
5
,
6
0
"
 
}
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
s
e
t
K
I
n
p
u
t
}
 
/
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
C
a
p
a
c
i
t
y
 
W
"
 
v
a
l
u
e
=
{
k
C
a
p
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
5
0
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
3
0
"
,
 
v
a
l
u
e
:
 
"
3
0
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
1
0
0
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
0
"
 
}
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
s
e
t
K
C
a
p
}
 
/
>
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
P
S
E
U
D
O
_
K
N
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
 
f
l
a
s
h
K
e
y
s
=
{
[
"
v
a
l
u
e
"
,
 
"
c
a
p
L
e
f
t
"
]
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
3
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
K
n
a
p
s
a
c
k
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}


 
 
 
 
 
 
 
 
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
H
.
c
u
r
r
e
n
t
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
"
H
u
f
f
m
a
n
 
C
o
d
i
n
g
 
-
 
G
r
e
e
d
y
 
t
r
e
e
 
m
e
r
g
e
"
 
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
H
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
{
m
o
d
e
T
a
b
s
}
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
C
h
a
r
a
c
t
e
r
s
 
(
c
h
a
r
:
f
r
e
q
)
"
 
v
a
l
u
e
=
{
h
S
t
r
}
 
h
e
l
p
e
r
=
"
S
p
a
c
e
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
.
 
H
u
f
f
m
a
n
 
u
s
e
s
 
t
h
e
 
t
w
o
 
l
e
a
s
t
-
f
r
e
q
u
e
n
t
 
n
o
d
e
s
 
g
r
e
e
d
i
l
y
.
"
 
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
 
6
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
:
5
 
b
:
9
 
c
:
1
2
 
d
:
1
3
 
e
:
1
6
 
f
:
4
5
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
m
a
l
l
 
4
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
:
1
 
b
:
2
 
c
:
3
 
d
:
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
S
k
e
w
e
d
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
:
1
0
0
 
b
:
2
 
c
:
3
 
d
:
4
"
 
}
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
s
e
t
H
S
t
r
}
 
/
>
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
P
S
E
U
D
O
_
H
U
F
F
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
 
f
l
a
s
h
K
e
y
s
=
{
[
"
s
u
m
"
,
 
"
h
e
a
p
"
]
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
3
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
H
u
f
f
m
a
n
V
i
e
w
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
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
}


 
 
 
 
 
 
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
 
c
a
r
d
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
T
h
e
 
g
r
e
e
d
y
 
i
d
e
a
"
,
 
b
o
d
y
:
 
"
A
t
 
e
a
c
h
 
s
t
e
p
,
 
p
i
c
k
 
t
h
e
 
c
h
o
i
c
e
 
t
h
a
t
 
l
o
o
k
s
 
b
e
s
t
 
r
i
g
h
t
 
n
o
w
 
-
 
w
i
t
h
o
u
t
 
t
h
i
n
k
i
n
g
 
a
b
o
u
t
 
t
h
e
 
f
u
t
u
r
e
.
 
G
r
e
e
d
y
 
a
l
g
o
r
i
t
h
m
s
 
a
r
e
 
f
a
s
t
 
a
n
d
 
s
i
m
p
l
e
,
 
b
u
t
 
o
n
l
y
 
w
o
r
k
 
w
h
e
n
 
t
h
e
 
p
r
o
b
l
e
m
 
h
a
s
 
a
 
s
p
e
c
i
f
i
c
 
'
m
a
t
r
o
i
d
-
l
i
k
e
'
 
s
t
r
u
c
t
u
r
e
 
w
h
e
r
e
 
l
o
c
a
l
 
o
p
t
i
m
a
 
l
e
a
d
 
t
o
 
g
l
o
b
a
l
 
o
p
t
i
m
a
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
W
h
e
n
 
g
r
e
e
d
y
 
w
o
r
k
s
"
,
 
b
o
d
y
:
 
"
T
w
o
 
p
r
o
p
e
r
t
i
e
s
:
 
(
1
)
 
G
r
e
e
d
y
-
c
h
o
i
c
e
 
p
r
o
p
e
r
t
y
 
-
 
a
 
g
l
o
b
a
l
 
o
p
t
i
m
u
m
 
i
n
c
l
u
d
e
s
 
a
 
l
o
c
a
l
l
y
-
o
p
t
i
m
a
l
 
f
i
r
s
t
 
c
h
o
i
c
e
.
 
(
2
)
 
O
p
t
i
m
a
l
 
s
u
b
s
t
r
u
c
t
u
r
e
 
-
 
t
h
e
 
r
e
s
t
 
o
f
 
t
h
e
 
p
r
o
b
l
e
m
,
 
a
f
t
e
r
 
t
h
a
t
 
c
h
o
i
c
e
,
 
i
s
 
a
 
s
m
a
l
l
e
r
 
i
n
s
t
a
n
c
e
 
w
i
t
h
 
t
h
e
 
s
a
m
e
 
s
t
r
u
c
t
u
r
e
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
A
c
t
i
v
i
t
y
 
S
e
l
e
c
t
i
o
n
"
,
 
b
o
d
y
:
 
"
S
o
r
t
 
b
y
 
f
i
n
i
s
h
 
t
i
m
e
.
 
P
i
c
k
 
t
h
e
 
n
e
x
t
 
a
c
t
i
v
i
t
y
 
w
h
o
s
e
 
s
t
a
r
t
 
≥
 
l
a
s
t
E
n
d
.
 
I
n
t
u
i
t
i
o
n
:
 
t
h
e
 
e
a
r
l
i
e
s
t
-
e
n
d
i
n
g
 
c
o
m
p
a
t
i
b
l
e
 
a
c
t
i
v
i
t
y
 
l
e
a
v
e
s
 
t
h
e
 
m
o
s
t
 
r
o
o
m
 
f
o
r
 
f
u
t
u
r
e
 
p
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
K
n
a
p
s
a
c
k
:
 
f
r
a
c
t
i
o
n
a
l
 
v
s
 
0
/
1
"
,
 
b
o
d
y
:
 
"
F
r
a
c
t
i
o
n
a
l
 
k
n
a
p
s
a
c
k
 
-
 
g
r
e
e
d
y
 
b
y
 
v
a
l
u
e
/
w
e
i
g
h
t
 
r
a
t
i
o
 
i
s
 
o
p
t
i
m
a
l
.
 
0
/
1
 
k
n
a
p
s
a
c
k
 
-
 
g
r
e
e
d
y
 
F
A
I
L
S
 
(
c
o
u
n
t
e
r
-
e
x
a
m
p
l
e
s
 
e
x
i
s
t
)
.
 
0
/
1
 
r
e
q
u
i
r
e
s
 
d
y
n
a
m
i
c
 
p
r
o
g
r
a
m
m
i
n
g
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
u
f
f
m
a
n
 
C
o
d
i
n
g
"
,
 
b
o
d
y
:
 
"
B
u
i
l
d
 
a
 
b
i
n
a
r
y
 
p
r
e
f
i
x
 
c
o
d
e
 
w
h
e
r
e
 
f
r
e
q
u
e
n
t
 
c
h
a
r
a
c
t
e
r
s
 
g
e
t
 
s
h
o
r
t
 
c
o
d
e
s
.
 
R
e
p
e
a
t
e
d
l
y
 
m
e
r
g
e
 
t
h
e
 
t
w
o
 
l
e
a
s
t
-
f
r
e
q
u
e
n
t
 
n
o
d
e
s
.
 
T
h
e
 
r
e
s
u
l
t
i
n
g
 
t
r
e
e
 
m
i
n
i
m
i
z
e
s
 
e
x
p
e
c
t
e
d
 
c
o
d
e
 
l
e
n
g
t
h
 
-
 
a
 
c
l
a
s
s
i
c
a
l
 
l
o
s
s
l
e
s
s
 
c
o
m
p
r
e
s
s
i
o
n
 
s
c
h
e
m
e
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
M
e
n
t
a
l
 
m
o
d
e
l
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
C
o
m
m
i
t
 
t
o
 
t
h
e
 
b
e
s
t
-
l
o
o
k
i
n
g
 
c
h
o
i
c
e
.
 
N
e
v
e
r
 
l
o
o
k
 
b
a
c
k
.
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


 
 
 
 
 
 
 
 
 
 
T
o
 
<
e
m
>
p
r
o
v
e
<
/
e
m
>
 
g
r
e
e
d
y
 
i
s
 
o
p
t
i
m
a
l
,
 
y
o
u
 
u
s
u
a
l
l
y
 
n
e
e
d
 
a
n
 
e
x
c
h
a
n
g
e
 
a
r
g
u
m
e
n
t
:
 
s
w
a
p
 
a
n
y


 
 
 
 
 
 
 
 
 
 
n
o
n
-
g
r
e
e
d
y
 
c
h
o
i
c
e
 
w
i
t
h
 
a
 
g
r
e
e
d
y
 
o
n
e
 
w
i
t
h
o
u
t
 
m
a
k
i
n
g
 
t
h
e
 
a
n
s
w
e
r
 
w
o
r
s
e
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
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
c
a
r
d
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
C
a
r
d
 
k
e
y
=
{
i
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
1
.
5
 
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
C
a
r
d
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
A
c
t
i
v
i
t
i
e
s
 
(
1
,
4
)
 
(
3
,
5
)
 
(
0
,
6
)
 
(
5
,
7
)
 
(
8
,
9
)
 
-
 
h
o
w
 
m
a
n
y
 
c
a
n
 
g
r
e
e
d
y
 
p
i
c
k
?
"
,
 
a
:
 
"
3
"
,
 
h
i
n
t
:
 
"
S
o
r
t
 
b
y
 
e
n
d
:
 
4
,
5
,
6
,
7
,
9
.
 
P
i
c
k
 
(
1
,
4
)
,
 
(
5
,
7
)
,
 
(
8
,
9
)
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
F
r
a
c
t
i
o
n
a
l
 
k
n
a
p
s
a
c
k
,
 
W
=
2
0
,
 
i
t
e
m
s
 
(
5
,
1
0
)
(
1
0
,
2
5
)
(
2
0
,
3
0
)
.
 
M
a
x
 
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
4
7
.
5
"
,
 
h
i
n
t
:
 
"
R
a
t
i
o
s
 
2
,
 
2
.
5
,
 
1
.
5
.
 
T
a
k
e
 
(
1
0
,
2
5
)
 
t
h
e
n
 
(
5
,
1
0
)
 
t
h
e
n
 
f
r
a
c
t
i
o
n
 
5
/
2
0
 
o
f
 
(
2
0
,
3
0
)
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
H
u
f
f
m
a
n
 
w
i
t
h
 
f
r
e
q
s
 
a
:
1
,
 
b
:
1
,
 
c
:
2
,
 
d
:
4
.
 
T
o
t
a
l
 
b
i
t
s
 
i
n
 
e
n
c
o
d
e
d
 
s
t
r
i
n
g
?
"
,
 
a
:
 
"
1
4
"
,
 
h
i
n
t
:
 
"
B
u
i
l
d
 
t
r
e
e
;
 
c
o
m
p
u
t
e
 
Σ
 
f
r
e
q
·
d
e
p
t
h
.
 
T
r
e
e
 
h
a
s
 
d
e
p
t
h
s
:
 
a
=
3
,
 
b
=
3
,
 
c
=
2
,
 
d
=
1
 
→
 
3
+
3
+
4
+
4
 
=
 
1
4
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
D
o
e
s
 
g
r
e
e
d
y
 
s
o
l
v
e
 
0
/
1
 
K
n
a
p
s
a
c
k
 
o
p
t
i
m
a
l
l
y
?
"
,
 
a
:
 
"
n
o
"
,
 
h
i
n
t
:
 
"
C
o
u
n
t
e
r
-
e
x
a
m
p
l
e
s
 
e
x
i
s
t
;
 
u
s
e
 
D
P
 
i
n
s
t
e
a
d
.
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
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
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
h
o
w
n
,
 
s
e
t
S
h
o
w
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
T
r
a
c
e
,
 
r
e
v
e
a
l
.
 
G
r
e
e
d
y
 
i
s
 
i
n
t
u
i
t
i
v
e
 
b
u
t
 
n
o
t
 
a
l
w
a
y
s
 
c
o
r
r
e
c
t
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
 
=
 
g
u
e
s
s
e
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
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
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
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
 
=
=
=
 
p
.
a
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
C
a
r
d
 
k
e
y
=
{
i
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
f
l
e
x
-
1
 
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
1
0
0
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
u
e
s
s
e
s
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
u
e
s
s
e
s
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
2
4
 
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
1
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
4
0
0
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
h
o
w
n
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
h
o
w
n
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
s
e
m
i
b
o
l
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
4
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
r
e
v
e
a
l
e
d
 
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
5
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
5
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
 
`
✓
 
$
{
p
.
a
}
`
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
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
m
t
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
H
i
n
t
:
 
{
p
.
h
i
n
t
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
C
a
r
d
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
e
n
 
g
r
e
e
d
y
 
w
o
r
k
s
 
v
s
.
 
w
h
e
n
 
D
P
 
i
s
 
n
e
e
d
e
d
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
r
a
c
t
i
o
n
a
l
 
k
n
a
p
s
a
c
k
:
 
g
r
e
e
d
y
.
 
0
/
1
 
k
n
a
p
s
a
c
k
:
 
D
P
.
 
T
h
e
 
d
i
f
f
e
r
e
n
c
e
 
i
s
 
t
h
a
t
 
f
r
a
c
t
i
o
n
s
 
l
e
t
 
y
o
u
 
&
a
p
o
s
;
c
o
m
m
i
t
 
p
a
r
t
i
a
l
l
y
&
a
p
o
s
;
 
-
 
t
h
e
 
g
r
e
e
d
y
 
c
h
o
i
c
e
 
i
s
n
&
a
p
o
s
;
t
 
p
e
r
m
a
n
e
n
t
 
i
n
 
a
 
p
r
o
b
l
e
m
a
t
i
c
 
w
a
y
.
 
I
n
 
0
/
1
,
 
c
o
m
m
i
t
t
i
n
g
 
t
o
 
a
n
 
i
t
e
m
 
e
x
c
l
u
d
e
s
 
f
u
t
u
r
e
 
s
w
a
p
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
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
E
x
c
h
a
n
g
e
 
a
r
g
u
m
e
n
t
 
p
r
o
o
f
 
s
k
e
t
c
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


 
 
 
 
 
 
 
 
 
 
T
a
k
e
 
a
n
y
 
o
p
t
i
m
a
l
 
s
o
l
u
t
i
o
n
 
O
P
T
.
 
F
i
n
d
 
t
h
e
 
f
i
r
s
t
 
p
o
i
n
t
 
w
h
e
r
e
 
O
P
T
 
d
i
f
f
e
r
s
 
f
r
o
m
 
g
r
e
e
d
y
 
G
.
 
S
w
a
p
 
t
h
a
t
 
p
i
e
c
e
 
f
r
o
m
 
O
P
T
 
w
i
t
h
 
G
&
a
p
o
s
;
s
 
c
h
o
i
c
e
 
-
 
s
h
o
w
 
t
h
e
 
n
e
w
 
s
o
l
u
t
i
o
n
 
i
s
 
≥
 
O
P
T
.
 
I
n
d
u
c
t
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
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
I
n
t
e
r
v
i
e
w
 
c
l
a
s
s
i
c
s
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
1
 
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


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
c
t
i
v
i
t
y
 
S
e
l
e
c
t
i
o
n
 
→
 
s
o
r
t
 
b
y
 
e
n
d
,
 
g
r
e
e
d
y
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
H
u
f
f
m
a
n
 
→
 
m
i
n
-
h
e
a
p
,
 
t
o
t
a
l
 
c
o
s
t
 
=
 
Σ
 
f
r
e
q
 
×
 
d
e
p
t
h
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
M
S
T
 
(
K
r
u
s
k
a
l
/
P
r
i
m
)
 
→
 
g
r
e
e
d
y
 
e
d
g
e
/
v
e
r
t
e
x
 
s
e
l
e
c
t
i
o
n
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
D
i
j
k
s
t
r
a
 
→
 
g
r
e
e
d
y
 
o
n
 
n
o
n
-
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
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
C
a
r
d
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
6
_
G
r
e
e
d
y
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
 
}
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
F
o
r
 
A
c
t
i
v
i
t
y
 
S
e
l
e
c
t
i
o
n
,
 
w
h
i
c
h
 
s
o
r
t
 
o
r
d
e
r
 
m
a
k
e
s
 
t
h
e
 
g
r
e
e
d
y
 
a
l
g
o
r
i
t
h
m
 
o
p
t
i
m
a
l
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
B
y
 
s
t
a
r
t
 
t
i
m
e
 
a
s
c
e
n
d
i
n
g
"
,
 
"
B
y
 
d
u
r
a
t
i
o
n
 
a
s
c
e
n
d
i
n
g
"
,
 
"
B
y
 
e
n
d
 
t
i
m
e
 
a
s
c
e
n
d
i
n
g
"
,
 
"
B
y
 
n
u
m
b
e
r
 
o
f
 
o
v
e
r
l
a
p
s
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
S
o
r
t
i
n
g
 
b
y
 
e
a
r
l
i
e
s
t
 
f
i
n
i
s
h
 
t
i
m
e
 
l
e
a
v
e
s
 
t
h
e
 
m
o
s
t
 
r
e
m
a
i
n
i
n
g
 
t
i
m
e
 
f
o
r
 
f
u
t
u
r
e
 
a
c
t
i
v
i
t
i
e
s
 
-
 
t
h
e
 
e
x
c
h
a
n
g
e
 
a
r
g
u
m
e
n
t
 
p
r
o
v
e
s
 
t
h
i
s
 
i
s
 
o
p
t
i
m
a
l
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
 
p
r
o
b
l
e
m
 
i
s
 
N
O
T
 
s
o
l
v
a
b
l
e
 
b
y
 
a
 
g
r
e
e
d
y
 
a
l
g
o
r
i
t
h
m
 
(
n
e
e
d
s
 
D
P
)
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
H
u
f
f
m
a
n
 
c
o
d
i
n
g
"
,
 
"
F
r
a
c
t
i
o
n
a
l
 
k
n
a
p
s
a
c
k
"
,
 
"
0
/
1
 
K
n
a
p
s
a
c
k
"
,
 
"
M
S
T
 
(
K
r
u
s
k
a
l
'
s
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
0
/
1
 
k
n
a
p
s
a
c
k
 
r
e
q
u
i
r
e
s
 
D
P
 
b
e
c
a
u
s
e
 
g
r
e
e
d
y
 
c
a
n
 
f
a
i
l
 
(
e
.
g
.
,
 
i
t
e
m
s
 
(
1
,
1
)
,
(
3
,
4
)
,
(
4
,
5
)
 
w
i
t
h
 
W
=
5
 
-
 
g
r
e
e
d
y
 
p
i
c
k
s
 
1
+
3
 
=
 
5
 
v
a
l
u
e
,
 
D
P
 
p
i
c
k
s
 
3
+
4
 
=
 
9
 
v
a
l
u
e
 
v
i
a
 
t
h
e
 
t
w
o
 
m
i
d
d
l
e
 
i
t
e
m
s
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
I
n
 
H
u
f
f
m
a
n
 
c
o
d
i
n
g
,
 
w
h
i
c
h
 
t
w
o
 
n
o
d
e
s
 
a
r
e
 
m
e
r
g
e
d
 
a
t
 
e
a
c
h
 
s
t
e
p
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
T
h
e
 
t
w
o
 
m
o
s
t
-
f
r
e
q
u
e
n
t
 
n
o
d
e
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
t
w
o
 
l
e
a
s
t
-
f
r
e
q
u
e
n
t
 
n
o
d
e
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
t
w
o
 
l
e
f
t
m
o
s
t
 
i
n
 
a
 
s
o
r
t
e
d
 
l
i
s
t
"
,


 
 
 
 
 
 
 
 
"
A
n
y
 
t
w
o
 
u
n
m
e
r
g
e
d
 
l
e
a
v
e
s
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
T
h
e
 
m
i
n
-
h
e
a
p
 
p
o
p
s
 
t
h
e
 
t
w
o
 
s
m
a
l
l
e
s
t
-
f
r
e
q
u
e
n
c
y
 
n
o
d
e
s
.
 
M
e
r
g
i
n
g
 
t
h
e
m
 
i
n
t
o
 
a
 
p
a
r
e
n
t
 
w
i
t
h
 
s
u
m
m
e
d
 
f
r
e
q
u
e
n
c
y
 
e
n
s
u
r
e
s
 
f
r
e
q
u
e
n
t
 
c
h
a
r
a
c
t
e
r
s
 
s
t
a
y
 
s
h
a
l
l
o
w
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
A
 
g
r
e
e
d
y
 
a
l
g
o
r
i
t
h
m
 
i
s
 
g
u
a
r
a
n
t
e
e
d
 
t
o
 
f
i
n
d
 
t
h
e
 
o
p
t
i
m
u
m
 
w
h
e
n
 
t
h
e
 
p
r
o
b
l
e
m
 
h
a
s
.
.
.
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
v
e
r
l
a
p
p
i
n
g
 
s
u
b
p
r
o
b
l
e
m
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
g
r
e
e
d
y
-
c
h
o
i
c
e
 
p
r
o
p
e
r
t
y
 
a
n
d
 
o
p
t
i
m
a
l
 
s
u
b
s
t
r
u
c
t
u
r
e
"
,


 
 
 
 
 
 
 
 
"
A
 
p
o
l
y
n
o
m
i
a
l
-
t
i
m
e
 
b
r
u
t
e
 
f
o
r
c
e
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
i
n
t
e
g
e
r
 
i
n
p
u
t
s
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
T
h
o
s
e
 
t
w
o
 
p
r
o
p
e
r
t
i
e
s
 
-
 
g
r
e
e
d
y
-
c
h
o
i
c
e
 
+
 
o
p
t
i
m
a
l
 
s
u
b
s
t
r
u
c
t
u
r
e
 
-
 
a
r
e
 
t
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
 
s
u
f
f
i
c
i
e
n
t
 
c
o
n
d
i
t
i
o
n
s
.
 
P
r
o
v
e
 
b
o
t
h
 
a
n
d
 
y
o
u
r
 
g
r
e
e
d
y
 
i
s
 
c
o
r
r
e
c
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
G
r
e
e
d
y
 
A
l
g
o
r
i
t
h
m
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
6
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
I
n
t
e
r
v
i
e
w
 
f
a
v
o
r
i
t
e
:
 
s
c
h
e
d
u
l
i
n
g
,
 
i
n
t
e
r
v
a
l
s
,
 
o
p
t
i
m
a
l
 
c
o
d
i
n
g
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
B
i
t
 
M
a
n
i
p
u
l
a
t
i
o
n
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


