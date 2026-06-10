
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
s
t
r
i
n
g
-
m
a
t
c
h
i
n
g
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
 
c
e
l
l
 
s
t
a
t
e
s
 
/
 
r
e
n
d
e
r
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
i
n
d
o
w
"
 
|
 
"
m
a
t
c
h
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
 
|
 
"
d
o
n
e
"
 
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
;




f
u
n
c
t
i
o
n
 
M
e
m
o
r
y
C
e
l
l
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
c
e
l
l
W
i
d
t
h
 
=
 
3
4
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
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
m
b
e
r
)
[
]
;


 
 
s
t
a
t
e
s
?
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


 
 
c
e
l
l
W
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
f
l
e
x
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
{
v
a
l
u
e
s
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
?
.
[
i
]
;


 
 
 
 
 
 
 
 
l
e
t
 
b
g
:
 
s
t
r
i
n
g
 
=
 
T
H
E
M
E
.
b
g
;


 
 
 
 
 
 
 
 
l
e
t
 
b
o
r
d
e
r
:
 
s
t
r
i
n
g
 
=
 
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
;


 
 
 
 
 
 
 
 
i
f
 
(
s
t
 
=
=
=
 
"
m
a
t
c
h
"
)
 
{
 
b
g
 
=
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
;
 
b
o
r
d
e
r
 
=
 
T
H
E
M
E
.
s
u
c
c
e
s
s
;
 
}


 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
 
=
=
=
 
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
)
 
{
 
b
g
 
=
 
`
$
{
T
H
E
M
E
.
d
a
n
g
e
r
}
1
4
`
;
 
b
o
r
d
e
r
 
=
 
T
H
E
M
E
.
d
a
n
g
e
r
;
 
}


 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
 
=
=
=
 
"
w
i
n
d
o
w
"
)
 
{
 
b
g
 
=
 
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
1
)
"
;
 
b
o
r
d
e
r
 
=
 
"
#
8
b
5
c
f
6
"
;
 
}


 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
 
=
=
=
 
"
d
o
n
e
"
)
 
{
 
b
g
 
=
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
S
o
f
t
}
`
;
 
b
o
r
d
e
r
 
=
 
T
H
E
M
E
.
s
u
c
c
e
s
s
D
a
r
k
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
x
s
 
r
o
u
n
d
e
d
 
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
i
d
t
h
,
 
h
e
i
g
h
t
:
 
c
e
l
l
W
i
d
t
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
b
o
r
d
e
r
}
`
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
 
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
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
 
 
R
a
b
i
n
-
K
a
r
p
 
f
r
a
m
e
 
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




c
o
n
s
t
 
B
A
S
E
 
=
 
3
1
;


c
o
n
s
t
 
M
O
D
 
=
 
1
0
0
9
;




f
u
n
c
t
i
o
n
 
c
h
a
r
V
a
l
(
c
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
 
{


 
 
r
e
t
u
r
n
 
c
.
t
o
U
p
p
e
r
C
a
s
e
(
)
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
0
)
 
-
 
6
4
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


 
 
w
i
n
d
o
w
S
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


 
 
w
i
n
d
o
w
H
a
s
h
:
 
n
u
m
b
e
r
;


 
 
p
a
t
t
e
r
n
H
a
s
h
:
 
n
u
m
b
e
r
;


 
 
p
h
a
s
e
:
 
"
i
n
i
t
"
 
|
 
"
s
l
i
d
e
"
 
|
 
"
c
h
e
c
k
"
 
|
 
"
m
a
t
c
h
"
 
|
 
"
s
p
u
r
i
o
u
s
"
 
|
 
"
d
o
n
e
"
;


 
 
h
i
g
h
l
i
g
h
t
K
e
y
?
:
 
s
t
r
i
n
g
;


 
 
f
o
u
n
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


 
 
s
p
u
r
i
o
u
s
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
 
=
 
[


 
 
"
#
 
R
a
b
i
n
-
K
a
r
p
"
,


 
 
"
f
u
n
c
t
i
o
n
 
r
a
b
i
n
K
a
r
p
(
t
,
 
p
)
:
"
,


 
 
"
 
 
m
 
<
-
 
|
p
|
;
 
n
 
<
-
 
|
t
|
"
,


 
 
"
 
 
p
a
t
H
a
s
h
 
<
-
 
h
a
s
h
(
p
)
"
,


 
 
"
 
 
w
i
n
H
a
s
h
 
<
-
 
h
a
s
h
(
t
[
0
.
.
m
-
1
]
)
"
,


 
 
"
 
 
f
o
r
 
s
 
f
r
o
m
 
0
 
t
o
 
n
-
m
:
"
,


 
 
"
 
 
 
 
i
f
 
w
i
n
H
a
s
h
 
=
 
p
a
t
H
a
s
h
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
t
[
s
.
.
s
+
m
-
1
]
 
=
 
p
:
 
r
e
p
o
r
t
 
s
"
,


 
 
"
 
 
 
 
 
 
e
l
s
e
:
 
s
p
u
r
i
o
u
s
 
h
i
t
"
,


 
 
"
 
 
 
 
i
f
 
s
 
<
 
n
-
m
:
"
,


 
 
"
 
 
 
 
 
 
w
i
n
H
a
s
h
 
<
-
 
r
o
l
l
(
w
i
n
H
a
s
h
,
 
t
[
s
]
,
 
t
[
s
+
m
]
)
"
,


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
 
i
n
i
t
i
a
l
H
a
s
h
(
s
:
 
s
t
r
i
n
g
,
 
m
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
l
e
t
 
h
 
=
 
0
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
 
m
;
 
i
+
+
)
 
h
 
=
 
(
h
 
*
 
B
A
S
E
 
+
 
c
h
a
r
V
a
l
(
s
[
i
]
)
)
 
%
 
M
O
D
;


 
 
r
e
t
u
r
n
 
h
 
<
 
0
 
?
 
h
 
+
 
M
O
D
 
:
 
h
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
 
r
o
l
l
H
a
s
h
(
p
r
e
v
H
a
s
h
:
 
n
u
m
b
e
r
,
 
o
u
t
C
h
a
r
:
 
s
t
r
i
n
g
,
 
i
n
C
h
a
r
:
 
s
t
r
i
n
g
,
 
h
i
g
h
e
s
t
P
o
w
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
l
e
t
 
h
 
=
 
p
r
e
v
H
a
s
h
;


 
 
h
 
=
 
(
h
 
-
 
(
c
h
a
r
V
a
l
(
o
u
t
C
h
a
r
)
 
*
 
h
i
g
h
e
s
t
P
o
w
)
 
%
 
M
O
D
 
+
 
M
O
D
 
*
 
M
O
D
)
 
%
 
M
O
D
;


 
 
h
 
=
 
(
h
 
*
 
B
A
S
E
 
+
 
c
h
a
r
V
a
l
(
i
n
C
h
a
r
)
)
 
%
 
M
O
D
;


 
 
r
e
t
u
r
n
 
h
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
F
r
a
m
e
s
(
t
e
x
t
:
 
s
t
r
i
n
g
,
 
p
a
t
t
e
r
n
:
 
s
t
r
i
n
g
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


 
 
c
o
n
s
t
 
n
 
=
 
t
e
x
t
.
l
e
n
g
t
h
,
 
m
 
=
 
p
a
t
t
e
r
n
.
l
e
n
g
t
h
;


 
 
l
e
t
 
h
i
g
h
e
s
t
P
o
w
 
=
 
1
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
 
m
 
-
 
1
;
 
i
+
+
)
 
h
i
g
h
e
s
t
P
o
w
 
=
 
(
h
i
g
h
e
s
t
P
o
w
 
*
 
B
A
S
E
)
 
%
 
M
O
D
;


 
 
c
o
n
s
t
 
p
a
t
H
a
s
h
 
=
 
i
n
i
t
i
a
l
H
a
s
h
(
p
a
t
t
e
r
n
,
 
m
)
;


 
 
l
e
t
 
w
i
n
H
a
s
h
 
=
 
i
n
i
t
i
a
l
H
a
s
h
(
t
e
x
t
,
 
m
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


 
 
c
o
n
s
t
 
s
p
u
r
i
o
u
s
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
 
3
,
 
v
a
r
s
:
 
{
 
"
|
p
|
"
:
 
m
,
 
"
|
t
|
"
:
 
n
,
 
p
a
t
H
a
s
h
,
 
b
a
s
e
:
 
B
A
S
E
,
 
m
o
d
:
 
M
O
D
 
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
u
t
e
 
p
a
t
t
e
r
n
 
h
a
s
h
:
 
h
a
s
h
(
"
$
{
p
a
t
t
e
r
n
}
"
)
 
=
 
$
{
p
a
t
H
a
s
h
}
.
`
,
 
w
i
n
d
o
w
S
t
a
r
t
:
 
0
,
 
w
i
n
d
o
w
H
a
s
h
:
 
0
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
"
i
n
i
t
"
,
 
f
o
u
n
d
:
 
[
]
,
 
s
p
u
r
i
o
u
s
:
 
[
]
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
p
a
t
H
a
s
h
"
 
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
 
4
,
 
v
a
r
s
:
 
{
 
w
i
n
S
t
a
r
t
:
 
0
,
 
w
i
n
H
a
s
h
,
 
p
a
t
H
a
s
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
I
n
i
t
i
a
l
 
w
i
n
d
o
w
 
h
a
s
h
:
 
h
a
s
h
(
"
$
{
t
e
x
t
.
s
l
i
c
e
(
0
,
 
m
)
}
"
)
 
=
 
$
{
w
i
n
H
a
s
h
}
.
`
,
 
w
i
n
d
o
w
S
t
a
r
t
:
 
0
,
 
w
i
n
d
o
w
H
a
s
h
:
 
w
i
n
H
a
s
h
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
"
i
n
i
t
"
,
 
f
o
u
n
d
:
 
[
]
,
 
s
p
u
r
i
o
u
s
:
 
[
]
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
w
i
n
H
a
s
h
"
 
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
 
=
 
0
;
 
s
 
<
=
 
n
 
-
 
m
;
 
s
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
h
a
s
h
M
a
t
c
h
 
=
 
w
i
n
H
a
s
h
 
=
=
=
 
p
a
t
H
a
s
h
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
 
s
,
 
w
i
n
H
a
s
h
,
 
p
a
t
H
a
s
h
,
 
m
a
t
c
h
:
 
h
a
s
h
M
a
t
c
h
 
?
 
"
y
e
s
"
 
:
 
"
n
o
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
 
h
a
s
h
M
a
t
c
h
 
?
 
`
H
a
s
h
 
m
a
t
c
h
 
a
t
 
s
=
$
{
s
}
!
 
N
e
e
d
 
t
o
 
v
e
r
i
f
y
 
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
.
`
 
:
 
`
H
a
s
h
e
s
 
d
i
f
f
e
r
 
(
$
{
w
i
n
H
a
s
h
}
 
v
s
 
$
{
p
a
t
H
a
s
h
}
)
.
 
S
k
i
p
.
`
,
 
w
i
n
d
o
w
S
t
a
r
t
:
 
s
,
 
w
i
n
d
o
w
H
a
s
h
:
 
w
i
n
H
a
s
h
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
h
a
s
h
M
a
t
c
h
 
?
 
"
c
h
e
c
k
"
 
:
 
"
s
l
i
d
e
"
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
s
p
u
r
i
o
u
s
:
 
[
.
.
.
s
p
u
r
i
o
u
s
]
 
}
)
;


 
 
 
 
i
f
 
(
h
a
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
u
b
 
=
 
t
e
x
t
.
s
l
i
c
e
(
s
,
 
s
 
+
 
m
)
;


 
 
 
 
 
 
i
f
 
(
s
u
b
 
=
=
=
 
p
a
t
t
e
r
n
)
 
{


 
 
 
 
 
 
 
 
f
o
u
n
d
.
p
u
s
h
(
s
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
 
7
,
 
v
a
r
s
:
 
{
 
s
,
 
m
a
t
c
h
:
 
s
 
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
V
e
r
i
f
i
e
d
 
m
a
t
c
h
 
a
t
 
i
n
d
e
x
 
$
{
s
}
:
 
"
$
{
s
u
b
}
"
 
=
 
"
$
{
p
a
t
t
e
r
n
}
"
.
`
,
 
w
i
n
d
o
w
S
t
a
r
t
:
 
s
,
 
w
i
n
d
o
w
H
a
s
h
:
 
w
i
n
H
a
s
h
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
"
m
a
t
c
h
"
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
s
p
u
r
i
o
u
s
:
 
[
.
.
.
s
p
u
r
i
o
u
s
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
p
u
r
i
o
u
s
.
p
u
s
h
(
s
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
 
8
,
 
v
a
r
s
:
 
{
 
s
,
 
a
c
t
u
a
l
:
 
s
u
b
,
 
p
a
t
t
e
r
n
 
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
p
u
r
i
o
u
s
 
h
i
t
 
a
t
 
s
=
$
{
s
}
:
 
h
a
s
h
e
s
 
c
o
l
l
i
d
e
d
 
b
u
t
 
"
$
{
s
u
b
}
"
 
!
=
 
"
$
{
p
a
t
t
e
r
n
}
"
.
`
,
 
w
i
n
d
o
w
S
t
a
r
t
:
 
s
,
 
w
i
n
d
o
w
H
a
s
h
:
 
w
i
n
H
a
s
h
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
"
s
p
u
r
i
o
u
s
"
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
s
p
u
r
i
o
u
s
:
 
[
.
.
.
s
p
u
r
i
o
u
s
]
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
s
 
<
 
n
 
-
 
m
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
H
a
s
h
 
=
 
r
o
l
l
H
a
s
h
(
w
i
n
H
a
s
h
,
 
t
e
x
t
[
s
]
,
 
t
e
x
t
[
s
 
+
 
m
]
,
 
h
i
g
h
e
s
t
P
o
w
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
 
9
,
 
v
a
r
s
:
 
{
 
r
e
m
o
v
e
:
 
t
e
x
t
[
s
]
,
 
a
d
d
:
 
t
e
x
t
[
s
 
+
 
m
]
,
 
o
l
d
:
 
w
i
n
H
a
s
h
,
 
"
n
e
w
"
:
 
n
e
w
H
a
s
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
R
o
l
l
:
 
d
r
o
p
 
'
$
{
t
e
x
t
[
s
]
}
'
,
 
a
d
d
 
'
$
{
t
e
x
t
[
s
 
+
 
m
]
}
'
 
-
>
 
n
e
w
 
w
i
n
H
a
s
h
 
=
 
$
{
n
e
w
H
a
s
h
}
.
`
,
 
w
i
n
d
o
w
S
t
a
r
t
:
 
s
 
+
 
1
,
 
w
i
n
d
o
w
H
a
s
h
:
 
n
e
w
H
a
s
h
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
"
s
l
i
d
e
"
,
 
f
o
u
n
d
:
 
[
.
.
.
f
o
u
n
d
]
,
 
s
p
u
r
i
o
u
s
:
 
[
.
.
.
s
p
u
r
i
o
u
s
]
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
w
i
n
H
a
s
h
"
 
}
)
;


 
 
 
 
 
 
w
i
n
H
a
s
h
 
=
 
n
e
w
H
a
s
h
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
 
1
,
 
v
a
r
s
:
 
{
 
m
a
t
c
h
e
s
:
 
f
o
u
n
d
.
l
e
n
g
t
h
,
 
s
p
u
r
i
o
u
s
:
 
s
p
u
r
i
o
u
s
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
 
M
a
t
c
h
e
s
:
 
[
$
{
f
o
u
n
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
 
|
|
 
"
-
"
}
]
.
 
S
p
u
r
i
o
u
s
 
h
i
t
s
:
 
$
{
s
p
u
r
i
o
u
s
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
 
w
i
n
d
o
w
S
t
a
r
t
:
 
M
a
t
h
.
m
a
x
(
0
,
 
n
 
-
 
m
)
,
 
w
i
n
d
o
w
H
a
s
h
:
 
w
i
n
H
a
s
h
,
 
p
a
t
t
e
r
n
H
a
s
h
:
 
p
a
t
H
a
s
h
,
 
p
h
a
s
e
:
 
"
d
o
n
e
"
,
 
f
o
u
n
d
,
 
s
p
u
r
i
o
u
s
 
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
a
t
i
o
n
 
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
a
s
h
B
o
x
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
h
i
g
h
l
i
g
h
t
,
 
c
o
l
o
r
 
}
:
 
{
 
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
;
 
v
a
l
u
e
:
 
n
u
m
b
e
r
 
|
 
s
t
r
i
n
g
;
 
h
i
g
h
l
i
g
h
t
?
:
 
b
o
o
l
e
a
n
;
 
c
o
l
o
r
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
c
e
n
t
e
r
 
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


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
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
 
`
$
{
c
o
l
o
r
}
1
0
`
,


 
 
 
 
 
 
 
 
m
i
n
W
i
d
t
h
:
 
1
1
0
,


 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
h
i
g
h
l
i
g
h
t
 
?
 
`
0
 
0
 
0
 
3
p
x
 
$
{
c
o
l
o
r
}
4
4
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
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
{
l
a
b
e
l
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
m
o
n
o
 
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
e
x
t
r
a
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
 
c
o
l
o
r
 
}
}
>
{
v
a
l
u
e
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




f
u
n
c
t
i
o
n
 
R
K
V
i
s
u
a
l
i
z
a
t
i
o
n
(
{
 
f
r
a
m
e
,
 
t
e
x
t
,
 
p
a
t
t
e
r
n
 
}
:
 
{
 
f
r
a
m
e
:
 
F
r
a
m
e
;
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
p
a
t
t
e
r
n
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


 
 
c
o
n
s
t
 
n
 
=
 
t
e
x
t
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
m
 
=
 
p
a
t
t
e
r
n
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
s
 
=
 
f
r
a
m
e
.
w
i
n
d
o
w
S
t
a
r
t
;




 
 
c
o
n
s
t
 
t
e
x
t
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
 
=
 
n
e
w
 
A
r
r
a
y
(
n
)
.
f
i
l
l
(
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
;


 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
m
;
 
k
+
+
)
 
{


 
 
 
 
i
f
 
(
s
 
+
 
k
 
<
 
n
)
 
{


 
 
 
 
 
 
i
f
 
(
f
r
a
m
e
.
p
h
a
s
e
 
=
=
=
 
"
m
a
t
c
h
"
)
 
t
e
x
t
S
t
a
t
e
s
[
s
 
+
 
k
]
 
=
 
"
m
a
t
c
h
"
;


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
f
r
a
m
e
.
p
h
a
s
e
 
=
=
=
 
"
s
p
u
r
i
o
u
s
"
)
 
t
e
x
t
S
t
a
t
e
s
[
s
 
+
 
k
]
 
=
 
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


 
 
 
 
 
 
e
l
s
e
 
t
e
x
t
S
t
a
t
e
s
[
s
 
+
 
k
]
 
=
 
"
w
i
n
d
o
w
"
;


 
 
 
 
}


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
f
 
o
f
 
f
r
a
m
e
.
f
o
u
n
d
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
m
;
 
k
+
+
)
 
i
f
 
(
f
 
+
 
k
 
<
 
n
 
&
&
 
t
e
x
t
S
t
a
t
e
s
[
f
 
+
 
k
]
 
!
=
=
 
"
m
a
t
c
h
"
)
 
t
e
x
t
S
t
a
t
e
s
[
f
 
+
 
k
]
 
=
 
"
d
o
n
e
"
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
.
5
 
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
1
"
>


 
 
 
 
 
 
 
 
 
 
T
e
x
t
 
(
w
i
n
d
o
w
 
=
 
p
a
t
t
e
r
n
 
l
e
n
g
t
h
 
{
m
}
)


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
t
e
x
t
.
s
p
l
i
t
(
"
"
)
.
m
a
p
(
(
c
)
 
=
>
 
(
c
 
=
=
=
 
"
 
"
 
?
 
"
.
"
 
:
 
c
)
)
}


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
t
e
x
t
S
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
3
4
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
1
"
>
P
a
t
t
e
r
n
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s
 
v
a
l
u
e
s
=
{
p
a
t
t
e
r
n
.
s
p
l
i
t
(
"
"
)
}
 
c
e
l
l
W
i
d
t
h
=
{
3
4
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
 
g
a
p
-
4
 
f
l
e
x
-
w
r
a
p
 
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


 
 
 
 
 
 
 
 
<
H
a
s
h
B
o
x
 
l
a
b
e
l
=
"
W
i
n
d
o
w
 
h
a
s
h
"
 
v
a
l
u
e
=
{
f
r
a
m
e
.
w
i
n
d
o
w
H
a
s
h
}
 
h
i
g
h
l
i
g
h
t
=
{
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
 
=
=
=
 
"
w
i
n
H
a
s
h
"
}
 
c
o
l
o
r
=
{
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
}
 
/
>


 
 
 
 
 
 
 
 
<
H
a
s
h
B
o
x
 
l
a
b
e
l
=
"
P
a
t
t
e
r
n
 
h
a
s
h
"
 
v
a
l
u
e
=
{
f
r
a
m
e
.
p
a
t
t
e
r
n
H
a
s
h
}
 
h
i
g
h
l
i
g
h
t
=
{
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
 
=
=
=
 
"
p
a
t
H
a
s
h
"
}
 
c
o
l
o
r
=
"
#
8
b
5
c
f
6
"
 
/
>


 
 
 
 
 
 
 
 
<
H
a
s
h
B
o
x
 
l
a
b
e
l
=
"
E
q
u
a
l
?
"
 
v
a
l
u
e
=
{
f
r
a
m
e
.
w
i
n
d
o
w
H
a
s
h
 
=
=
=
 
f
r
a
m
e
.
p
a
t
t
e
r
n
H
a
s
h
 
?
 
"
Y
E
S
"
 
:
 
"
n
o
"
}
 
c
o
l
o
r
=
{
f
r
a
m
e
.
w
i
n
d
o
w
H
a
s
h
 
=
=
=
 
f
r
a
m
e
.
p
a
t
t
e
r
n
H
a
s
h
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
"
#
6
4
7
4
8
b
"
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
 
g
a
p
-
2
.
5
 
t
e
x
t
-
x
s
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
:
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
a
`
,
 
c
o
l
o
r
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
D
a
r
k
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
m
a
t
c
h
e
s
:
 
{
f
r
a
m
e
.
f
o
u
n
d
.
l
e
n
g
t
h
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
:
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
2
)
"
,
 
c
o
l
o
r
:
 
"
#
b
4
5
3
0
9
"
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
s
p
u
r
i
o
u
s
:
 
{
f
r
a
m
e
.
s
p
u
r
i
o
u
s
.
l
e
n
g
t
h
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
P
a
i
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
 
{
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
p
a
t
t
e
r
n
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
 
p
a
r
t
s
 
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
\
s
*
\
|
\
s
*
/
)
;


 
 
i
f
 
(
p
a
r
t
s
.
l
e
n
g
t
h
 
!
=
=
 
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
t
e
x
t
,
 
p
a
t
t
e
r
n
]
 
=
 
p
a
r
t
s
;


 
 
i
f
 
(
!
t
e
x
t
 
|
|
 
!
p
a
t
t
e
r
n
 
|
|
 
p
a
t
t
e
r
n
.
l
e
n
g
t
h
 
>
 
t
e
x
t
.
l
e
n
g
t
h
 
|
|
 
p
a
t
t
e
r
n
.
l
e
n
g
t
h
 
>
 
8
 
|
|
 
t
e
x
t
.
l
e
n
g
t
h
 
>
 
2
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


 
 
i
f
 
(
!
/
^
[
A
-
Z
a
-
z
]
+
$
/
.
t
e
s
t
(
t
e
x
t
)
 
|
|
 
!
/
^
[
A
-
Z
a
-
z
]
+
$
/
.
t
e
s
t
(
p
a
t
t
e
r
n
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
 
t
e
x
t
,
 
p
a
t
t
e
r
n
 
}
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
s
r
c
,
 
s
e
t
S
r
c
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
A
B
R
A
C
A
D
A
B
R
A
 
|
 
A
B
R
A
"
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
 
p
a
r
s
e
P
a
i
r
(
s
r
c
)
;


 
 
c
o
n
s
t
 
{
 
t
e
x
t
,
 
p
a
t
t
e
r
n
 
}
 
=
 
p
a
r
s
e
d
 
?
?
 
{
 
t
e
x
t
:
 
"
A
B
R
A
C
A
D
A
B
R
A
"
,
 
p
a
t
t
e
r
n
:
 
"
A
B
R
A
"
 
}
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
 
b
u
i
l
d
F
r
a
m
e
s
(
t
e
x
t
,
 
p
a
t
t
e
r
n
)
,
 
[
t
e
x
t
,
 
p
a
t
t
e
r
n
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
R
a
b
i
n
-
K
a
r
p
 
-
 
R
o
l
l
i
n
g
 
H
a
s
h
 
P
a
t
t
e
r
n
 
M
a
t
c
h
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
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
T
e
x
t
 
|
 
P
a
t
t
e
r
n
 
 
(
l
e
t
t
e
r
s
 
o
n
l
y
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
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
A
B
R
A
C
A
D
A
B
R
A
 
|
 
A
B
R
A
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{
`
H
a
s
h
 
b
a
s
e
=
$
{
B
A
S
E
}
,
 
m
o
d
=
$
{
M
O
D
}
.
 
M
a
x
 
t
e
x
t
 
2
0
 
c
h
a
r
s
,
 
p
a
t
t
e
r
n
 
8
 
c
h
a
r
s
.
`
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
A
B
R
A
C
A
D
A
B
R
A
 
|
 
A
B
R
A
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
R
e
p
e
t
i
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
A
A
A
A
A
B
A
A
A
 
|
 
A
A
A
B
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
L
i
k
e
l
y
 
s
p
u
r
i
o
u
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
A
A
B
C
A
A
B
C
B
B
 
|
 
A
B
C
B
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
N
o
 
m
a
t
c
h
"
,
 
v
a
l
u
e
:
 
"
H
E
L
L
O
W
O
R
L
D
 
|
 
X
Y
Z
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
P
a
i
r
(
v
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
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
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
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
.
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
f
l
e
x
 
g
a
p
-
3
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


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
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
p
u
r
p
l
e
-
5
0
0
"
>
w
i
n
d
o
w
<
/
s
t
r
o
n
g
>
 
-
 
c
u
r
r
e
n
t
 
s
l
i
c
e
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
>
m
a
t
c
h
<
/
s
t
r
o
n
g
>
 
-
 
c
o
n
f
i
r
m
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
a
m
b
e
r
-
5
0
0
"
>
s
p
u
r
i
o
u
s
<
/
s
t
r
o
n
g
>
 
-
 
h
a
s
h
 
c
o
l
l
i
s
i
o
n
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
R
K
V
i
s
u
a
l
i
z
a
t
i
o
n
 
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
 
t
e
x
t
=
{
t
e
x
t
}
 
p
a
t
t
e
r
n
=
{
p
a
t
t
e
r
n
}
 
/
>
}


 
 
 
 
 
 
 
 
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
 
s
e
c
t
i
o
n
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
H
a
s
h
 
t
h
e
 
p
a
t
t
e
r
n
 
o
n
c
e
.
 
H
a
s
h
 
t
h
e
 
f
i
r
s
t
 
w
i
n
d
o
w
 
o
f
 
t
h
e
 
t
e
x
t
.
 
C
o
m
p
a
r
e
 
h
a
s
h
e
s
;
 
o
n
l
y
 
o
n
 
h
a
s
h
 
m
a
t
c
h
,
 
c
o
m
p
a
r
e
 
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
.
 
S
l
i
d
e
 
a
n
d
 
r
e
p
e
a
t
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
R
o
l
l
i
n
g
 
h
a
s
h
"
,
 
b
o
d
y
:
 
"
I
n
s
t
e
a
d
 
o
f
 
r
e
-
h
a
s
h
i
n
g
 
e
v
e
r
y
 
w
i
n
d
o
w
 
f
r
o
m
 
s
c
r
a
t
c
h
 
(
O
(
m
)
 
e
a
c
h
)
,
 
u
p
d
a
t
e
 
i
n
 
O
(
1
)
:
 
s
u
b
t
r
a
c
t
 
t
h
e
 
l
e
a
v
i
n
g
 
c
h
a
r
'
s
 
c
o
n
t
r
i
b
u
t
i
o
n
,
 
s
h
i
f
t
 
t
h
e
 
r
e
s
t
 
u
p
 
b
y
 
t
h
e
 
b
a
s
e
,
 
a
d
d
 
t
h
e
 
i
n
c
o
m
i
n
g
 
c
h
a
r
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
S
p
u
r
i
o
u
s
 
h
i
t
s
"
,
 
b
o
d
y
:
 
"
D
i
f
f
e
r
e
n
t
 
s
t
r
i
n
g
s
 
c
a
n
 
h
a
v
e
 
t
h
e
 
s
a
m
e
 
h
a
s
h
 
(
c
o
l
l
i
s
i
o
n
)
.
 
S
o
 
h
a
s
h
 
e
q
u
a
l
i
t
y
 
o
n
l
y
 
t
r
i
g
g
e
r
s
 
a
 
f
u
l
l
 
c
h
a
r
a
c
t
e
r
 
c
h
e
c
k
.
 
C
h
o
o
s
i
n
g
 
l
a
r
g
e
 
p
r
i
m
e
 
m
o
d
 
k
e
e
p
s
 
c
o
l
l
i
s
i
o
n
s
 
r
a
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
v
e
r
a
g
e
 
v
s
 
w
o
r
s
t
 
c
a
s
e
"
,
 
b
o
d
y
:
 
"
E
x
p
e
c
t
e
d
 
O
(
n
 
+
 
m
)
.
 
W
o
r
s
t
 
c
a
s
e
 
(
a
d
v
e
r
s
a
r
i
a
l
 
s
t
r
i
n
g
s
 
t
h
a
t
 
c
o
n
s
t
a
n
t
l
y
 
c
o
l
l
i
d
e
)
:
 
O
(
n
*
m
)
 
-
 
s
a
m
e
 
a
s
 
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
.
 
K
M
P
 
a
v
o
i
d
s
 
t
h
i
s
 
w
o
r
s
t
 
c
a
s
e
 
d
e
t
e
r
m
i
n
i
s
t
i
c
a
l
l
y
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
M
u
l
t
i
-
p
a
t
t
e
r
n
 
w
i
n
"
,
 
b
o
d
y
:
 
"
R
a
b
i
n
-
K
a
r
p
 
e
x
c
e
l
s
 
w
h
e
n
 
y
o
u
 
s
e
a
r
c
h
 
m
a
n
y
 
p
a
t
t
e
r
n
s
 
a
t
 
o
n
c
e
:
 
h
a
s
h
 
t
h
e
m
 
a
l
l
,
 
h
a
s
h
 
e
a
c
h
 
w
i
n
d
o
w
 
o
n
c
e
,
 
c
h
e
c
k
 
s
e
t
 
m
e
m
b
e
r
s
h
i
p
 
-
 
O
(
n
 
+
 
t
o
t
a
l
 
p
a
t
t
e
r
n
 
l
e
n
g
t
h
)
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
3
.
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
F
i
n
g
e
r
p
r
i
n
t
,
 
t
h
e
n
 
v
e
r
i
f
y
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
H
a
s
h
 
f
i
r
s
t
,
 
c
h
a
r
a
c
t
e
r
-
c
h
e
c
k
 
o
n
l
y
 
o
n
 
m
a
t
c
h
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
h
i
n
k
 
o
f
 
t
h
e
 
p
a
t
t
e
r
n
 
a
s
 
a
 
&
l
d
q
u
o
;
f
i
n
g
e
r
p
r
i
n
t
&
r
d
q
u
o
;
 
(
a
 
n
u
m
b
e
r
)
.
 
S
c
a
n
 
t
h
e
 
t
e
x
t
 
a
n
d
 
c
o
m
p
u
t
e
 
t
h
e


 
 
 
 
 
 
 
 
 
 
f
i
n
g
e
r
p
r
i
n
t
 
o
f
 
e
a
c
h
 
w
i
n
d
o
w
 
i
n
 
c
o
n
s
t
a
n
t
 
t
i
m
e
 
b
y
 
r
o
l
l
i
n
g
.
 
C
o
m
p
a
r
e
 
f
i
n
g
e
r
p
r
i
n
t
s
 
f
i
r
s
t
 
a
s
 
a
 
c
h
e
a
p
 
f
i
l
t
e
r
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
2
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
6
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
s
e
c
t
i
o
n
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
1
.
5
 
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
 
I
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
W
o
r
s
t
-
c
a
s
e
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
R
a
b
i
n
-
K
a
r
p
?
"
,
 
a
n
s
w
e
r
:
 
"
O
(
n
m
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
E
x
p
e
c
t
e
d
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
w
i
t
h
 
a
 
g
o
o
d
 
h
a
s
h
 
f
u
n
c
t
i
o
n
?
"
,
 
a
n
s
w
e
r
:
 
"
O
(
n
+
m
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
h
a
t
 
m
a
k
e
s
 
R
a
b
i
n
-
K
a
r
p
 
e
s
p
e
c
i
a
l
l
y
 
u
s
e
f
u
l
 
c
o
m
p
a
r
e
d
 
t
o
 
K
M
P
?
"
,
 
a
n
s
w
e
r
:
 
"
m
u
l
t
i
-
p
a
t
t
e
r
n
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
s
t
r
i
n
g
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
 
"
"
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
S
h
o
r
t
-
a
n
s
w
e
r
 
q
u
e
s
t
i
o
n
s
 
-
 
w
r
i
t
e
 
t
h
e
 
k
e
y
 
p
h
r
a
s
e
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
2
.
5
 
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
p
.
q
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
l
e
x
 
g
a
p
-
2
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
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
 
g
 
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
 
g
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
g
)
;
 
}
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
y
o
u
r
 
a
n
s
w
e
r
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
 
w
-
4
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
l
i
m
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
 
s
 
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
 
s
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
s
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
h
o
w
n
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
:
 
`
$
{
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
}
1
0
`
,
 
c
o
l
o
r
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
{
p
.
a
n
s
w
e
r
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
3
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
T
h
e
 
r
o
l
l
i
n
g
-
h
a
s
h
 
f
o
r
m
u
l
a
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
a
s
h
(
s
[
i
+
1
.
.
i
+
m
]
)
 
=
 
(
h
a
s
h
(
s
[
i
.
.
i
+
m
-
1
]
)
 
-
 
s
[
i
]
*
B
^
(
m
-
1
)
)
 
*
 
B
 
+
 
s
[
i
+
m
]
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
,
 
a
l
l
 
m
o
d
 
M
.


 
 
 
 
 
 
 
 
 
 
P
r
e
c
o
m
p
u
t
e
 
B
^
(
m
-
1
)
 
o
n
c
e
.
 
T
h
a
t
 
s
u
b
t
r
a
c
t
i
o
n
 
/
 
m
u
l
t
i
p
l
y
 
/
 
a
d
d
 
i
s
 
O
(
1
)
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
P
i
c
k
i
n
g
 
h
a
s
h
 
c
o
n
s
t
a
n
t
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


 
 
 
 
 
 
 
 
 
 
U
s
e
 
a
 
l
a
r
g
e
 
p
r
i
m
e
 
m
o
d
u
l
u
s
 
(
e
.
g
.
 
1
0
^
9
 
+
 
7
)
 
t
o
 
m
i
n
i
m
i
z
e
 
c
o
l
l
i
s
i
o
n
s
.
 
T
h
e
 
b
a
s
e
 
s
h
o
u
l
d
 
b
e
 
l
a
r
g
e
r
 
t
h
a
n


 
 
 
 
 
 
 
 
 
 
t
h
e
 
a
l
p
h
a
b
e
t
 
s
i
z
e
 
(
2
5
6
 
f
o
r
 
A
S
C
I
I
,
 
3
1
 
f
o
r
 
l
e
t
t
e
r
s
)
.
 
F
o
r
 
s
e
c
u
r
i
t
y
-
s
e
n
s
i
t
i
v
e
 
u
s
e
s
,
 
p
i
c
k
 
a
 
r
a
n
d
o
m
 
p
r
i
m
e


 
 
 
 
 
 
 
 
 
 
a
t
 
r
u
n
t
i
m
e
 
t
o
 
t
h
w
a
r
t
 
a
d
v
e
r
s
a
r
i
e
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
 
 
A
c
t
i
v
i
t
y
 
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
7
_
R
a
b
i
n
K
a
r
p
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
T
h
e
 
k
e
y
 
o
p
e
r
a
t
i
o
n
 
e
n
a
b
l
i
n
g
 
R
a
b
i
n
-
K
a
r
p
'
s
 
O
(
n
)
 
e
x
p
e
c
t
e
d
 
t
i
m
e
 
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
B
i
n
a
r
y
 
s
e
a
r
c
h
 
o
n
 
h
a
s
h
 
v
a
l
u
e
s
"
,
 
"
R
o
l
l
i
n
g
 
h
a
s
h
 
u
p
d
a
t
e
 
i
n
 
O
(
1
)
 
p
e
r
 
w
i
n
d
o
w
"
,
 
"
K
M
P
'
s
 
f
a
i
l
u
r
e
 
t
a
b
l
e
"
,
 
"
T
r
i
e
 
t
r
a
v
e
r
s
a
l
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
R
e
c
o
m
p
u
t
i
n
g
 
h
a
s
h
 
f
r
o
m
 
s
c
r
a
t
c
h
 
p
e
r
 
w
i
n
d
o
w
 
w
o
u
l
d
 
b
e
 
O
(
m
)
 
x
 
n
 
=
 
O
(
n
m
)
.
 
R
o
l
l
i
n
g
 
h
a
s
h
 
d
r
o
p
s
 
t
h
a
t
 
t
o
 
O
(
1
)
 
p
e
r
 
s
l
i
d
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
A
 
'
s
p
u
r
i
o
u
s
 
h
i
t
'
 
i
n
 
R
a
b
i
n
-
K
a
r
p
 
m
e
a
n
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
A
 
c
h
a
r
a
c
t
e
r
 
m
i
s
m
a
t
c
h
 
w
i
t
h
o
u
t
 
c
h
e
c
k
i
n
g
 
t
h
e
 
h
a
s
h
"
,
 
"
T
w
o
 
w
i
n
d
o
w
s
 
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
 
h
a
s
h
 
b
u
t
 
d
i
f
f
e
r
e
n
t
 
s
t
r
i
n
g
s
"
,
 
"
A
 
m
i
s
s
e
d
 
t
r
u
e
 
m
a
t
c
h
"
,
 
"
A
 
c
a
c
h
e
 
m
i
s
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
H
a
s
h
 
c
o
l
l
i
s
i
o
n
s
 
-
 
d
i
f
f
e
r
e
n
t
 
s
t
r
i
n
g
s
,
 
s
a
m
e
 
h
a
s
h
 
-
 
f
o
r
c
e
 
a
 
f
u
l
l
 
c
h
a
r
a
c
t
e
r
 
c
o
m
p
a
r
e
 
t
o
 
c
o
n
f
i
r
m
 
o
r
 
r
e
j
e
c
t
 
t
h
e
 
m
a
t
c
h
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
o
r
s
t
-
c
a
s
e
 
(
a
d
v
e
r
s
a
r
i
a
l
 
c
o
l
l
i
s
i
o
n
s
)
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
R
a
b
i
n
-
K
a
r
p
 
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
O
(
n
 
+
 
m
)
"
,
 
"
O
(
n
 
l
o
g
 
m
)
"
,
 
"
O
(
n
·
m
)
"
,
 
"
O
(
m
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
I
n
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
 
e
v
e
r
y
 
w
i
n
d
o
w
 
s
p
u
r
i
o
u
s
l
y
 
h
i
t
s
 
a
n
d
 
r
e
q
u
i
r
e
s
 
a
 
f
u
l
l
 
O
(
m
)
 
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
 
-
>
 
O
(
n
*
m
)
,
 
s
a
m
e
 
a
s
 
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
y
 
i
s
 
R
a
b
i
n
-
K
a
r
p
 
a
t
t
r
a
c
t
i
v
e
 
f
o
r
 
m
u
l
t
i
-
p
a
t
t
e
r
n
 
s
e
a
r
c
h
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
I
t
s
 
h
a
s
h
e
s
 
a
r
e
 
t
r
i
v
i
a
l
l
y
 
i
n
v
e
r
t
i
b
l
e
"
,


 
 
 
 
 
 
 
 
"
H
a
s
h
i
n
g
 
a
l
l
 
p
a
t
t
e
r
n
s
 
o
n
c
e
 
l
e
t
s
 
e
a
c
h
 
w
i
n
d
o
w
 
b
e
 
c
h
e
c
k
e
d
 
a
g
a
i
n
s
t
 
t
h
e
 
w
h
o
l
e
 
s
e
t
 
i
n
 
O
(
1
)
 
a
v
e
r
a
g
e
"
,


 
 
 
 
 
 
 
 
"
I
t
 
a
v
o
i
d
s
 
m
o
d
u
l
a
r
 
a
r
i
t
h
m
e
t
i
c
"
,


 
 
 
 
 
 
 
 
"
I
t
 
u
s
e
s
 
l
e
s
s
 
m
e
m
o
r
y
 
t
h
a
n
 
K
M
P
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
S
t
o
r
e
 
a
l
l
 
p
a
t
t
e
r
n
 
h
a
s
h
e
s
 
i
n
 
a
 
s
e
t
;
 
e
a
c
h
 
w
i
n
d
o
w
 
h
a
s
h
 
i
s
 
q
u
e
r
i
e
d
 
o
n
c
e
 
-
 
t
o
t
a
l
 
O
(
n
 
+
 
s
u
m
 
o
f
 
p
a
t
t
e
r
n
 
l
e
n
g
t
h
s
)
 
a
v
e
r
a
g
e
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
R
a
b
i
n
-
K
a
r
p
 
S
t
r
i
n
g
 
M
a
t
c
h
i
n
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
4
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
L
o
w
 
-
 
u
s
e
f
u
l
 
f
o
r
 
m
u
l
t
i
-
p
a
t
t
e
r
n
 
a
n
d
 
p
l
a
g
i
a
r
i
s
m
 
d
e
t
e
c
t
i
o
n
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
K
M
P
 
S
t
r
i
n
g
 
M
a
t
c
h
i
n
g
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


