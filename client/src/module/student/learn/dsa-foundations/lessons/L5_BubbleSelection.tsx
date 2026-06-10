
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
s
o
r
t
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
s
o
r
t
e
d
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
p
i
v
o
t
"
 
|
 
"
v
i
s
i
t
e
d
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
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
d
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
 
A
r
r
a
y
B
a
r
s
 
c
o
m
p
o
n
e
n
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
S
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
o
r
d
e
r
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
0
6
b
6
d
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
5
9
e
0
b
"
,


 
 
s
o
r
t
e
d
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


 
 
a
c
t
i
v
e
:
 
"
#
8
1
8
c
f
8
"
,


 
 
p
i
v
o
t
:
 
"
#
f
9
7
3
1
6
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
6
d
3
d
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
a
3
e
6
3
5
"
,


 
 
l
o
w
:
 
"
#
6
0
a
5
f
a
"
,


 
 
h
i
g
h
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


 
 
m
i
d
:
 
"
#
f
b
9
2
3
c
"
,


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
 
A
r
r
a
y
B
a
r
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


 
 
p
o
i
n
t
e
r
s
,


 
 
h
e
i
g
h
t
 
=
 
1
6
0
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
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
 
m
a
x
 
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
v
a
l
u
e
s
,
 
1
)
;


 
 
c
o
n
s
t
 
b
a
r
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
2
4
,
 
M
a
t
h
.
m
i
n
(
4
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
4
8
0
 
/
 
(
v
a
l
u
e
s
.
l
e
n
g
t
h
 
|
|
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
4
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
W
 
=
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
 
-
 
g
a
p
;




 
 
c
o
n
s
t
 
p
t
r
B
y
I
d
x
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
 
s
t
r
i
n
g
[
]
>
 
=
 
{
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
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
n
a
m
e
,
 
i
d
x
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
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
)
;


 
 
 
 
}


 
 
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
w
-
f
u
l
l
 
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
d
i
v
 
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
 
t
o
t
a
l
W
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
h
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
 
+
 
3
2
 
}
}
>


 
 
 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
t
o
t
a
l
W
}
 
h
e
i
g
h
t
=
{
h
e
i
g
h
t
 
+
 
3
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
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
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
 
b
a
r
H
 
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
4
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
(
v
 
/
 
m
a
x
)
 
*
 
(
h
e
i
g
h
t
 
-
 
8
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
i
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
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
i
g
h
t
 
-
 
b
a
r
H
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
 
=
 
(
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
)
 
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
S
[
s
t
a
t
e
]
 
?
?
 
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
S
.
d
e
f
a
u
l
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
?
?
 
[
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
i
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
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
b
a
r
W
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
b
a
r
H
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
3
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
2
5
s
 
e
a
s
e
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
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
1
2
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
1
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
s
.
m
a
p
(
(
p
,
 
p
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
2
6
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
"
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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


 
 
 
 
 
 
 
 
<
/
s
v
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
r
a
m
e
 
t
y
p
e
s
 
&
 
b
u
i
l
d
e
r
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
 
b
o
o
l
e
a
n
 
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


 
 
v
a
l
u
e
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


 
 
s
t
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
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
B
U
B
B
L
E
 
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
 
b
u
b
b
l
e
S
o
r
t
(
A
)
:
"
,


 
 
"
 
 
n
 
←
 
l
e
n
g
t
h
(
A
)
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
 
0
 
t
o
 
n
-
2
:
"
,


 
 
"
 
 
 
 
s
w
a
p
p
e
d
 
←
 
f
a
l
s
e
"
,


 
 
"
 
 
 
 
f
o
r
 
j
 
f
r
o
m
 
0
 
t
o
 
n
-
2
-
i
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
A
[
j
]
 
>
 
A
[
j
+
1
]
:
"
,


 
 
"
 
 
 
 
 
 
 
 
s
w
a
p
(
A
[
j
]
,
 
A
[
j
+
1
]
)
"
,


 
 
"
 
 
 
 
 
 
 
 
s
w
a
p
p
e
d
 
←
 
t
r
u
e
"
,


 
 
"
 
 
 
 
i
f
 
n
o
t
 
s
w
a
p
p
e
d
:
 
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
S
E
L
E
C
T
I
O
N
 
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
 
s
e
l
e
c
t
i
o
n
S
o
r
t
(
A
)
:
"
,


 
 
"
 
 
n
 
←
 
l
e
n
g
t
h
(
A
)
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
 
0
 
t
o
 
n
-
2
:
"
,


 
 
"
 
 
 
 
m
i
n
 
←
 
i
"
,


 
 
"
 
 
 
 
f
o
r
 
j
 
f
r
o
m
 
i
+
1
 
t
o
 
n
-
1
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
A
[
j
]
 
<
 
A
[
m
i
n
]
:
"
,


 
 
"
 
 
 
 
 
 
 
 
m
i
n
 
←
 
j
"
,


 
 
"
 
 
 
 
s
w
a
p
(
A
[
i
]
,
 
A
[
m
i
n
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
 
b
u
i
l
d
B
u
b
b
l
e
F
r
a
m
e
s
(
i
n
p
u
t
:
 
n
u
m
b
e
r
[
]
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
 
A
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
A
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
 
f
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


 
 
l
e
t
 
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
s
 
=
 
0
;


 
 
l
e
t
 
s
w
a
p
s
 
=
 
0
;


 
 
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
 
n
e
w
 
S
e
t
<
n
u
m
b
e
r
>
(
)
;




 
 
c
o
n
s
t
 
s
n
a
p
 
=
 
(
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
,
 
m
s
g
:
 
s
t
r
i
n
g
,
 
e
x
t
r
a
?
:
 
P
a
r
t
i
a
l
<
F
r
a
m
e
>
)
:
 
F
r
a
m
e
 
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
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
 
=
 
A
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
 
(
s
o
r
t
e
d
.
h
a
s
(
k
)
 
?
 
"
s
o
r
t
e
d
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
)
;


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
l
i
n
e
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
,
 
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
s
,
 
s
w
a
p
s
,
 
.
.
.
(
e
x
t
r
a
?
.
v
a
r
s
 
|
|
 
{
}
)
 
}
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
,


 
 
 
 
 
 
p
o
i
n
t
e
r
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
 
m
s
g
,


 
 
 
 
 
 
.
.
.
e
x
t
r
a
,


 
 
 
 
}
;


 
 
}
;




 
 
f
.
p
u
s
h
(
s
n
a
p
(
0
,
 
`
S
t
a
r
t
i
n
g
 
b
u
b
b
l
e
 
s
o
r
t
 
o
n
 
[
$
{
A
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
`
)
)
;


 
 
f
.
p
u
s
h
(
s
n
a
p
(
1
,
 
`
A
r
r
a
y
 
l
e
n
g
t
h
 
n
 
=
 
$
{
n
}
`
)
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
 
n
 
-
 
1
;
 
i
+
+
)
 
{


 
 
 
 
f
.
p
u
s
h
(
s
n
a
p
(
2
,
 
`
P
a
s
s
 
$
{
i
 
+
 
1
}
:
 
b
u
b
b
l
e
 
t
h
e
 
l
a
r
g
e
s
t
 
u
n
s
o
r
t
e
d
 
e
l
e
m
e
n
t
 
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
 
$
{
n
 
-
 
1
 
-
 
i
}
`
,
 
{
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
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
s
,
 
s
w
a
p
s
 
}
 
}
)
)
;


 
 
 
 
l
e
t
 
s
w
a
p
p
e
d
 
=
 
f
a
l
s
e
;


 
 
 
 
f
.
p
u
s
h
(
s
n
a
p
(
3
,
 
`
R
e
s
e
t
 
s
w
a
p
p
e
d
 
f
l
a
g
 
f
o
r
 
t
h
i
s
 
p
a
s
s
`
,
 
{
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
s
w
a
p
p
e
d
,
 
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
s
,
 
s
w
a
p
s
 
}
 
}
)
)
;




 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
 
n
 
-
 
1
 
-
 
i
;
 
j
+
+
)
 
{


 
 
 
 
 
 
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
s
+
+
;


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
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
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
 
=
 
A
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
 
(
s
o
r
t
e
d
.
h
a
s
(
k
)
 
?
 
"
s
o
r
t
e
d
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
)
;


 
 
 
 
 
 
 
 
s
t
a
t
e
s
[
j
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
a
t
e
s
[
j
 
+
 
1
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
 
n
,
 
i
,
 
j
,
 
s
w
a
p
p
e
d
,
 
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
s
,
 
s
w
a
p
s
,
 
"
A
[
j
]
"
:
 
A
[
j
]
,
 
"
A
[
j
+
1
]
"
:
 
A
[
j
 
+
 
1
]
 
}
,


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
,


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
j
,
 
"
j
+
1
"
:
 
j
 
+
 
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
C
o
m
p
a
r
e
 
A
[
$
{
j
}
]
 
=
 
$
{
A
[
j
]
}
 
w
i
t
h
 
A
[
$
{
j
 
+
 
1
}
]
 
=
 
$
{
A
[
j
 
+
 
1
]
}
`
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
i
f
 
(
A
[
j
]
 
>
 
A
[
j
 
+
 
1
]
)
 
{


 
 
 
 
 
 
 
 
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
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
 
=
 
A
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
 
(
s
o
r
t
e
d
.
h
a
s
(
k
)
 
?
 
"
s
o
r
t
e
d
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
)
;


 
 
 
 
 
 
 
 
s
t
a
t
e
s
[
j
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
a
t
e
s
[
j
 
+
 
1
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
 
n
,
 
i
,
 
j
,
 
s
w
a
p
p
e
d
,
 
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
s
,
 
s
w
a
p
s
,
 
"
A
[
j
]
"
:
 
A
[
j
]
,
 
"
A
[
j
+
1
]
"
:
 
A
[
j
 
+
 
1
]
 
}
,


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
,


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
j
,
 
"
j
+
1
"
:
 
j
 
+
 
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
$
{
A
[
j
]
}
 
>
 
$
{
A
[
j
 
+
 
1
]
}
 
-
 
o
u
t
 
o
f
 
o
r
d
e
r
,
 
s
w
a
p
!
`
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
[
A
[
j
]
,
 
A
[
j
 
+
 
1
]
]
 
=
 
[
A
[
j
 
+
 
1
]
,
 
A
[
j
]
]
;


 
 
 
 
 
 
 
 
s
w
a
p
s
+
+
;


 
 
 
 
 
 
 
 
s
w
a
p
p
e
d
 
=
 
t
r
u
e
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
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
 
=
 
A
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
 
(
s
o
r
t
e
d
.
h
a
s
(
k
)
 
?
 
"
s
o
r
t
e
d
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
)
;


 
 
 
 
 
 
 
 
s
t
2
[
j
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
j
 
+
 
1
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
 
n
,
 
i
,
 
j
,
 
s
w
a
p
p
e
d
,
 
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
s
,
 
s
w
a
p
s
 
}
,


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
 
 
s
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


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
j
,
 
"
j
+
1
"
:
 
j
 
+
 
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
w
a
p
p
e
d
 
-
 
a
r
r
a
y
 
n
o
w
 
[
$
{
A
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
`
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
s
w
a
p
s
"
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
s
n
a
p
(
5
,
 
`
$
{
A
[
j
]
}
 
<
=
 
$
{
A
[
j
 
+
 
1
]
}
 
-
 
a
l
r
e
a
d
y
 
i
n
 
o
r
d
e
r
,
 
n
o
 
s
w
a
p
`
,
 
{
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
j
,
 
s
w
a
p
p
e
d
,
 
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
s
,
 
s
w
a
p
s
 
}
 
}
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
s
o
r
t
e
d
.
a
d
d
(
n
 
-
 
1
 
-
 
i
)
;


 
 
 
 
f
.
p
u
s
h
(
s
n
a
p
(
2
,
 
`
E
n
d
 
o
f
 
p
a
s
s
 
$
{
i
 
+
 
1
}
:
 
p
o
s
i
t
i
o
n
 
$
{
n
 
-
 
1
 
-
 
i
}
 
i
s
 
f
i
n
a
l
i
z
e
d
`
)
)
;




 
 
 
 
i
f
 
(
!
s
w
a
p
p
e
d
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
s
n
a
p
(
8
,
 
`
N
o
 
s
w
a
p
s
 
t
h
i
s
 
p
a
s
s
 
-
 
a
r
r
a
y
 
i
s
 
a
l
r
e
a
d
y
 
s
o
r
t
e
d
,
 
e
x
i
t
 
e
a
r
l
y
`
)
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
 
n
 
-
 
1
 
-
 
i
;
 
k
+
+
)
 
s
o
r
t
e
d
.
a
d
d
(
k
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




 
 
s
o
r
t
e
d
.
a
d
d
(
0
)
;


 
 
f
.
p
u
s
h
(
s
n
a
p
(
0
,
 
`
D
o
n
e
.
 
S
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
:
 
[
$
{
A
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
`
,
 
{
 
v
a
r
s
:
 
{
 
n
,
 
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
s
,
 
s
w
a
p
s
 
}
 
}
)
)
;


 
 
r
e
t
u
r
n
 
f
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
S
e
l
e
c
t
i
o
n
F
r
a
m
e
s
(
i
n
p
u
t
:
 
n
u
m
b
e
r
[
]
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
 
A
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
A
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
 
f
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


 
 
l
e
t
 
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
s
 
=
 
0
;


 
 
l
e
t
 
s
w
a
p
s
 
=
 
0
;


 
 
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
 
n
e
w
 
S
e
t
<
n
u
m
b
e
r
>
(
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
S
t
a
t
e
s
 
=
 
(
e
x
t
r
a
?
:
 
{
 
m
i
n
?
:
 
n
u
m
b
e
r
;
 
i
?
:
 
n
u
m
b
e
r
;
 
j
?
:
 
n
u
m
b
e
r
 
}
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
:
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
 
=
 
A
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
 
(
s
o
r
t
e
d
.
h
a
s
(
k
)
 
?
 
"
s
o
r
t
e
d
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
)
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
m
i
n
 
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
 
s
t
[
e
x
t
r
a
.
m
i
n
]
 
=
 
"
p
i
v
o
t
"
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
j
 
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
 
s
t
[
e
x
t
r
a
.
j
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
e
x
t
r
a
?
.
i
 
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
 
&
&
 
!
s
o
r
t
e
d
.
h
a
s
(
e
x
t
r
a
.
i
)
)
 
s
t
[
e
x
t
r
a
.
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


 
 
 
 
r
e
t
u
r
n
 
s
t
;


 
 
}
;




 
 
f
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
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
s
t
a
t
e
s
:
 
A
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
)
,


 
 
 
 
p
o
i
n
t
e
r
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
S
t
a
r
t
i
n
g
 
s
e
l
e
c
t
i
o
n
 
s
o
r
t
 
o
n
 
[
$
{
A
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
`
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
 
i
 
=
 
0
;
 
i
 
<
 
n
 
-
 
1
;
 
i
+
+
)
 
{


 
 
 
 
f
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
 
n
,
 
i
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
{
 
i
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
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
P
a
s
s
 
$
{
i
 
+
 
1
}
:
 
f
i
n
d
 
m
i
n
i
m
u
m
 
o
f
 
A
[
$
{
i
}
.
.
$
{
n
 
-
 
1
}
]
 
a
n
d
 
p
l
a
c
e
 
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
`
,


 
 
 
 
}
)
;




 
 
 
 
l
e
t
 
m
i
n
 
=
 
i
;


 
 
 
 
f
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
 
n
,
 
i
,
 
m
i
n
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
{
 
i
,
 
m
i
n
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
m
i
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
t
a
r
t
 
w
i
t
h
 
m
i
n
 
=
 
$
{
i
}
 
(
a
s
s
u
m
e
 
A
[
$
{
i
}
]
 
=
 
$
{
A
[
i
]
}
 
i
s
 
s
m
a
l
l
e
s
t
)
`
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
m
i
n
"
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
 
j
 
=
 
i
 
+
 
1
;
 
j
 
<
 
n
;
 
j
+
+
)
 
{


 
 
 
 
 
 
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
s
+
+
;


 
 
 
 
 
 
f
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
 
n
,
 
i
,
 
j
,
 
m
i
n
,
 
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
s
,
 
s
w
a
p
s
,
 
"
A
[
j
]
"
:
 
A
[
j
]
,
 
"
A
[
m
i
n
]
"
:
 
A
[
m
i
n
]
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
{
 
i
,
 
m
i
n
,
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
m
i
n
,
 
j
 
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
 
A
[
$
{
j
}
]
 
=
 
$
{
A
[
j
]
}
 
w
i
t
h
 
A
[
$
{
m
i
n
}
]
 
=
 
$
{
A
[
m
i
n
]
}
`
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
i
f
 
(
A
[
j
]
 
<
 
A
[
m
i
n
]
)
 
{


 
 
 
 
 
 
 
 
m
i
n
 
=
 
j
;


 
 
 
 
 
 
 
 
f
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
 
n
,
 
i
,
 
j
,
 
m
i
n
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
{
 
i
,
 
m
i
n
,
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
m
i
n
,
 
j
 
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
[
$
{
j
}
]
 
i
s
 
s
m
a
l
l
e
r
 
-
 
u
p
d
a
t
e
 
m
i
n
 
=
 
$
{
j
}
`
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
m
i
n
"
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
i
f
 
(
m
i
n
 
!
=
=
 
i
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
[
]
 
=
 
A
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
 
(
s
o
r
t
e
d
.
h
a
s
(
k
)
 
?
 
"
s
o
r
t
e
d
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
m
i
n
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
 
n
,
 
i
,
 
m
i
n
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
m
i
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
w
a
p
 
A
[
$
{
i
}
]
 
=
 
$
{
A
[
i
]
}
 
w
i
t
h
 
A
[
$
{
m
i
n
}
]
 
=
 
$
{
A
[
m
i
n
]
}
`
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
[
A
[
i
]
,
 
A
[
m
i
n
]
]
 
=
 
[
A
[
m
i
n
]
,
 
A
[
i
]
]
;


 
 
 
 
 
 
s
w
a
p
s
+
+
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
f
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
 
n
,
 
i
,
 
m
i
n
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
{
 
i
,
 
m
i
n
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
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
m
i
n
 
e
q
u
a
l
s
 
i
 
-
 
n
o
 
s
w
a
p
 
n
e
e
d
e
d
`
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
 
 
s
o
r
t
e
d
.
a
d
d
(
i
)
;


 
 
 
 
f
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
 
n
,
 
i
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
)
,
 
p
o
i
n
t
e
r
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
P
o
s
i
t
i
o
n
 
$
{
i
}
 
i
s
 
f
i
n
a
l
i
z
e
d
.
 
A
r
r
a
y
:
 
[
$
{
A
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
`
,


 
 
 
 
}
)
;


 
 
}




 
 
s
o
r
t
e
d
.
a
d
d
(
n
 
-
 
1
)
;


 
 
f
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
,
 
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
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
s
t
a
t
e
s
:
 
A
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
s
o
r
t
e
d
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
)
,
 
p
o
i
n
t
e
r
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
D
o
n
e
.
 
S
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
:
 
[
$
{
A
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
`
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
 
n
u
m
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
[
,
\
s
]
+
/
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
.
t
r
i
m
(
)
)
)
;


 
 
i
f
 
(
n
u
m
s
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


 
 
i
f
 
(
n
u
m
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
 
|
|
 
n
u
m
s
.
l
e
n
g
t
h
 
>
 
1
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


 
 
r
e
t
u
r
n
 
n
u
m
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
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
l
g
o
,
 
s
e
t
A
l
g
o
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
"
b
u
b
b
l
e
"
 
|
 
"
s
e
l
e
c
t
i
o
n
"
>
(
"
b
u
b
b
l
e
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
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
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
5
,
 
2
,
 
8
,
 
1
,
 
9
,
 
3
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
S
t
r
)
 
?
?
 
[
5
,
 
2
,
 
8
,
 
1
,
 
9
,
 
3
]
,
 
[
i
n
p
u
t
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
 
(
a
l
g
o
 
=
=
=
 
"
b
u
b
b
l
e
"
 
?
 
b
u
i
l
d
B
u
b
b
l
e
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
)
 
:
 
b
u
i
l
d
S
e
l
e
c
t
i
o
n
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
)
)
,


 
 
 
 
[
p
a
r
s
e
d
,
 
a
l
g
o
]
,


 
 
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
 
P
S
E
U
D
O
 
=
 
a
l
g
o
 
=
=
=
 
"
b
u
b
b
l
e
"
 
?
 
P
S
E
U
D
O
_
B
U
B
B
L
E
 
:
 
P
S
E
U
D
O
_
S
E
L
E
C
T
I
O
N
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
b
u
b
b
l
e
"
,
 
"
s
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
 
a
s
 
c
o
n
s
t
)
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
a
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
A
l
g
o
(
a
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
a
l
g
o
 
=
=
=
 
a
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
a
 
=
=
=
 
"
b
u
b
b
l
e
"
 
?
 
"
B
u
b
b
l
e
 
S
o
r
t
"
 
:
 
"
S
e
l
e
c
t
i
o
n
 
S
o
r
t
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
a
l
g
o
 
=
=
=
 
"
b
u
b
b
l
e
"
 
?
 
"
B
u
b
b
l
e
 
S
o
r
t
"
 
:
 
"
S
e
l
e
c
t
i
o
n
 
S
o
r
t
"
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
r
r
a
y
 
(
2
-
1
2
 
n
u
m
b
e
r
s
)
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
S
t
r
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
 
5
,
 
2
,
 
8
,
 
1
,
 
9
,
 
3
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
C
o
m
m
a
 
o
r
 
s
p
a
c
e
 
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
R
a
n
d
o
m
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
 
2
,
 
8
,
 
1
,
 
9
,
 
3
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
v
e
r
s
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
9
,
 
7
,
 
5
,
 
3
,
 
1
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
e
a
r
l
y
 
s
o
r
t
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
1
,
 
2
,
 
4
,
 
3
,
 
5
,
 
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
D
u
p
l
i
c
a
t
e
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
4
,
 
2
,
 
4
,
 
1
,
 
2
,
 
4
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
S
t
r
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
n
 
=
 
5
 
+
 
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
r
a
n
d
o
m
(
)
 
*
 
4
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
 
n
 
}
,
 
(
)
 
=
>
 
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
r
a
n
d
o
m
(
)
 
*
 
2
0
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
a
r
r
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
4
"
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
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
v
a
l
u
e
s
 
?
?
 
p
a
r
s
e
d
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
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
1
8
0
}


 
 
 
 
 
 
 
 
 
 
/
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
T
w
o
 
s
i
m
p
l
e
 
O
(
n
²
)
 
s
o
r
t
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
T
r
a
i
n
i
n
g
-
w
h
e
e
l
s
 
s
o
r
t
i
n
g
:
 
c
o
m
p
a
r
e
,
 
s
w
a
p
,
 
r
e
p
e
a
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


 
 
 
 
 
 
 
 
 
 
B
u
b
b
l
e
 
s
o
r
t
 
a
n
d
 
s
e
l
e
c
t
i
o
n
 
s
o
r
t
 
a
r
e
 
t
h
e
 
t
r
a
i
n
i
n
g
-
w
h
e
e
l
s
 
o
f
 
s
o
r
t
i
n
g
.
 
B
o
t
h
 
c
o
m
p
a
r
e
 
p
a
i
r
s
 
a
n
d


 
 
 
 
 
 
 
 
 
 
s
w
a
p
,
 
b
o
t
h
 
t
a
k
e
 
q
u
a
d
r
a
t
i
c
 
t
i
m
e
,
 
b
u
t
 
t
h
e
y
 
d
i
f
f
e
r
 
i
n
 
w
h
a
t
 
t
h
e
y
 
l
o
o
k
 
f
o
r
 
e
a
c
h
 
p
a
s
s
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
B
u
b
b
l
e
 
S
o
r
t
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
c
a
n
 
l
e
f
t
-
t
o
-
r
i
g
h
t
.
 
E
v
e
r
y
 
a
d
j
a
c
e
n
t
 
p
a
i
r
 
t
h
a
t
 
i
s
 
o
u
t
 
o
f
 
o
r
d
e
r
 
g
e
t
s
 
s
w
a
p
p
e
d
.
 
A
f
t
e
r
 
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
f
u
l
l
 
p
a
s
s
 
t
h
e
 
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
 
b
u
b
b
l
e
s
 
t
o
 
t
h
e
 
e
n
d
.
 
R
e
p
e
a
t
;
 
e
a
c
h
 
p
a
s
s
 
s
h
r
i
n
k
s
 
t
h
e
 
u
n
s
o
r
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
r
e
g
i
o
n
 
b
y
 
1
.


 
 
 
 
 
 
 
 
 
 
<
/
p
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
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
B
e
s
t
:
<
/
s
t
r
o
n
g
>
 
O
(
n
)
 
(
a
l
r
e
a
d
y
 
s
o
r
t
e
d
 
+
 
e
a
r
l
y
 
e
x
i
t
)
 
·
 
<
s
t
r
o
n
g
>
A
v
g
/
W
o
r
s
t
:
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
O
(
n
²
)
 
·
 
<
s
t
r
o
n
g
>
S
t
a
b
l
e
:
<
/
s
t
r
o
n
g
>
 
y
e
s


 
 
 
 
 
 
 
 
 
 
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
S
e
l
e
c
t
i
o
n
 
S
o
r
t
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
 
e
a
c
h
 
p
o
s
i
t
i
o
n
 
i
,
 
s
c
a
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
 
a
r
r
a
y
 
t
o
 
f
i
n
d
 
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
,
 
t
h
e
n
 
s
w
a
p
 
i
t
 
i
n
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
 
i
.
 
O
n
e
 
s
w
a
p
 
p
e
r
 
p
a
s
s
,
 
f
e
w
e
r
 
w
r
i
t
e
s
 
t
h
a
n
 
b
u
b
b
l
e
,
 
b
u
t
 
a
l
w
a
y
s
 
O
(
n
²
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
s
.


 
 
 
 
 
 
 
 
 
 
<
/
p
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
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
B
e
s
t
/
A
v
g
/
W
o
r
s
t
:
<
/
s
t
r
o
n
g
>
 
O
(
n
²
)
 
·
 
<
s
t
r
o
n
g
>
S
w
a
p
s
:
<
/
s
t
r
o
n
g
>
 
O
(
n
)
 
·
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
S
t
a
b
l
e
:
<
/
s
t
r
o
n
g
>
 
n
o


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
K
e
y
 
i
n
s
i
g
h
t
:
<
/
s
t
r
o
n
g
>
 
b
o
t
h
 
b
u
i
l
d
 
t
h
e
 
s
o
r
t
e
d
 
p
o
r
t
i
o
n
 
f
r
o
m
 
t
h
e
 
e
n
d
 
(
b
u
b
b
l
e
)
 
o
r
 
s
t
a
r
t


 
 
 
 
 
 
 
 
(
s
e
l
e
c
t
i
o
n
)
.
 
W
a
t
c
h
 
t
h
e
 
l
i
m
e
-
c
o
l
o
r
e
d
 
s
o
r
t
e
d
 
r
e
g
i
o
n
 
g
r
o
w
 
i
n
 
t
h
e
 
v
i
s
u
a
l
i
z
e
r
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
B
u
b
b
l
e
 
s
o
r
t
 
o
n
 
[
4
,
 
1
,
 
3
,
 
2
]
:
 
h
o
w
 
m
a
n
y
 
s
w
a
p
s
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
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
e
l
e
c
t
i
o
n
 
s
o
r
t
 
o
n
 
[
5
,
 
1
,
 
4
,
 
2
,
 
3
]
:
 
h
o
w
 
m
a
n
y
 
s
w
a
p
s
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
3
"
 
}
,


 
 
 
 
{
 
q
:
 
"
B
u
b
b
l
e
 
s
o
r
t
 
o
n
 
s
o
r
t
e
d
 
[
1
,
2
,
3
,
4
,
5
]
 
(
w
i
t
h
 
e
a
r
l
y
 
e
x
i
t
)
:
 
s
w
a
p
s
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
0
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
 
o
n
 
p
a
p
e
r
 
a
n
d
 
p
r
e
d
i
c
t
 
s
w
a
p
 
c
o
u
n
t
s
.
 
T
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
 
=
=
=
 
p
.
a
n
s
w
e
r
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
5
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
5
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
?
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
m
e
d
i
u
m
 
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
r
o
s
e
-
3
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
C
o
r
r
e
c
t
 
-
 
$
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
n
s
w
e
r
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
y
 
O
(
n
²
)
?
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


 
 
 
 
 
 
 
 
 
 
B
o
t
h
 
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
 
c
o
m
p
a
r
e
 
e
v
e
r
y
 
p
a
i
r
 
o
f
 
p
o
s
i
t
i
o
n
s
 
(
r
o
u
g
h
l
y
 
n
(
n
-
1
)
/
2
 
t
i
m
e
s
)
.
 
D
o
u
b
l
i
n
g
 
t
h
e


 
 
 
 
 
 
 
 
 
 
i
n
p
u
t
 
q
u
a
d
r
u
p
l
e
s
 
t
h
e
 
w
o
r
k
.
 
T
h
a
t
 
i
s
 
f
i
n
e
 
f
o
r
 
1
0
0
 
i
t
e
m
s
,
 
c
a
t
a
s
t
r
o
p
h
i
c
 
f
o
r
 
a
 
m
i
l
l
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
B
u
b
b
l
e
 
v
s
 
S
e
l
e
c
t
i
o
n
 
i
n
 
o
n
e
 
s
e
n
t
e
n
c
e
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


 
 
 
 
 
 
 
 
 
 
B
u
b
b
l
e
 
p
u
s
h
e
s
 
t
h
e
 
l
a
r
g
e
s
t
 
t
o
 
t
h
e
 
r
i
g
h
t
 
w
i
t
h
 
m
a
n
y
 
s
m
a
l
l
 
s
w
a
p
s
;
 
s
e
l
e
c
t
i
o
n
 
h
u
n
t
s
 
f
o
r
 
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
 
a
n
d
 
m
o
v
e
s
 
i
t
 
w
i
t
h
 
o
n
e
 
b
i
g
 
s
w
a
p
.
 
S
a
m
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
,
 
d
i
f
f
e
r
e
n
t
 
f
l
a
v
o
r
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
 
h
o
o
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
C
o
u
n
t
 
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
s
 
a
n
d
 
s
w
a
p
s
 
s
e
p
a
r
a
t
e
l
y
;
 
b
o
t
h
 
a
p
p
e
a
r
 
i
n
 
e
x
a
m
 
q
u
e
s
t
i
o
n
s
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
S
e
l
e
c
t
i
o
n
 
s
o
r
t
 
m
a
k
e
s
 
e
x
a
c
t
l
y
 
n
-
1
 
s
w
a
p
s
 
m
a
x
;
 
b
u
b
b
l
e
 
c
a
n
 
m
a
k
e
 
u
p
 
t
o
 
n
(
n
-
1
)
/
2
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
B
u
b
b
l
e
 
w
i
t
h
 
e
a
r
l
y
-
e
x
i
t
 
i
s
 
O
(
n
)
 
o
n
 
s
o
r
t
e
d
 
i
n
p
u
t
,
 
a
 
c
l
a
s
s
i
c
 
M
C
Q
 
t
r
a
p
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
5
_
B
u
b
b
l
e
S
e
l
e
c
t
i
o
n
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
A
f
t
e
r
 
o
n
e
 
f
u
l
l
 
p
a
s
s
 
o
f
 
b
u
b
b
l
e
 
s
o
r
t
 
o
n
 
[
5
,
 
1
,
 
4
,
 
2
,
 
8
]
,
 
t
h
e
 
a
r
r
a
y
 
b
e
c
o
m
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
[
1
,
 
4
,
 
2
,
 
5
,
 
8
]
"
,
 
"
[
1
,
 
5
,
 
4
,
 
2
,
 
8
]
"
,
 
"
[
5
,
 
1
,
 
4
,
 
2
,
 
8
]
"
,
 
"
[
1
,
 
2
,
 
4
,
 
5
,
 
8
]
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
 
0
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
5
 
v
s
 
1
 
→
 
s
w
a
p
 
→
 
[
1
,
5
,
4
,
2
,
8
]
;
 
5
 
v
s
 
4
 
→
 
s
w
a
p
 
→
 
[
1
,
4
,
5
,
2
,
8
]
;
 
5
 
v
s
 
2
 
→
 
s
w
a
p
 
→
 
[
1
,
4
,
2
,
5
,
8
]
;
 
5
 
v
s
 
8
 
→
 
n
o
 
s
w
a
p
.
 
8
 
i
s
 
a
l
r
e
a
d
y
 
i
n
 
p
l
a
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
S
e
l
e
c
t
i
o
n
 
s
o
r
t
 
o
n
 
[
2
9
,
 
1
0
,
 
1
4
,
 
3
7
,
 
1
3
]
 
-
 
a
f
t
e
r
 
t
h
e
 
f
i
r
s
t
 
s
w
a
p
,
 
t
h
e
 
a
r
r
a
y
 
b
e
c
o
m
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
[
1
0
,
 
2
9
,
 
1
4
,
 
3
7
,
 
1
3
]
"
,


 
 
 
 
 
 
 
 
"
[
1
0
,
 
1
4
,
 
2
9
,
 
3
7
,
 
1
3
]
"
,


 
 
 
 
 
 
 
 
"
[
1
3
,
 
1
0
,
 
1
4
,
 
3
7
,
 
2
9
]
"
,


 
 
 
 
 
 
 
 
"
[
1
0
,
 
2
9
,
 
1
4
,
 
1
3
,
 
3
7
]
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
 
0
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
M
i
n
i
m
u
m
 
o
f
 
e
n
t
i
r
e
 
a
r
r
a
y
 
i
s
 
1
0
 
a
t
 
i
n
d
e
x
 
1
.
 
S
w
a
p
 
A
[
0
]
=
2
9
 
w
i
t
h
 
A
[
1
]
=
1
0
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
 
c
o
u
n
t
 
o
f
 
b
u
b
b
l
e
 
s
o
r
t
 
o
n
 
n
 
e
l
e
m
e
n
t
s
 
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
n
"
,
 
"
n
 
l
o
g
 
n
"
,
 
"
n
(
n
-
1
)
/
2
"
,
 
"
n
²
+
n
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
B
u
b
b
l
e
 
d
o
e
s
 
(
n
-
1
)
 
+
 
(
n
-
2
)
 
+
 
.
.
.
 
+
 
1
 
=
 
n
(
n
-
1
)
/
2
 
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
s
 
i
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
 
s
t
a
t
e
m
e
n
t
 
i
s
 
T
R
U
E
 
a
b
o
u
t
 
s
e
l
e
c
t
i
o
n
 
s
o
r
t
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
 
b
e
s
t
 
c
a
s
e
 
i
s
 
O
(
n
)
 
w
h
e
n
 
t
h
e
 
a
r
r
a
y
 
i
s
 
s
o
r
t
e
d
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
s
t
a
b
l
e
 
b
y
 
d
e
f
a
u
l
t
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
a
k
e
s
 
a
t
 
m
o
s
t
 
n
-
1
 
s
w
a
p
s
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
i
n
p
u
t
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
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
 
b
u
b
b
l
e
 
s
o
r
t
 
o
n
 
n
e
a
r
l
y
-
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
E
x
a
c
t
l
y
 
o
n
e
 
s
w
a
p
 
p
e
r
 
o
u
t
e
r
 
i
t
e
r
a
t
i
o
n
,
 
s
o
 
a
t
 
m
o
s
t
 
n
-
1
 
s
w
a
p
s
 
t
o
t
a
l
,
 
i
n
d
e
p
e
n
d
e
n
t
 
o
f
 
i
n
p
u
t
 
o
r
d
e
r
.
 
S
e
l
e
c
t
i
o
n
 
i
s
 
n
o
t
 
s
t
a
b
l
e
 
a
n
d
 
n
o
t
 
a
d
a
p
t
i
v
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
B
u
b
b
l
e
 
&
 
S
e
l
e
c
t
i
o
n
 
S
o
r
t
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
1
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
W
a
r
m
-
u
p
 
p
r
o
b
l
e
m
s
,
 
r
a
r
e
l
y
 
a
s
k
e
d
 
d
i
r
e
c
t
l
y
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
I
n
s
e
r
t
i
o
n
 
S
o
r
t
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


