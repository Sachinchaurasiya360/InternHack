
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




/
*
 
N
o
 
p
r
a
c
t
i
c
e
 
s
l
u
g
 
f
o
r
 
t
h
i
s
 
l
e
s
s
o
n
 
(
s
e
t
 
t
o
 
n
u
l
l
 
p
e
r
 
t
h
e
 
t
a
s
k
 
t
a
b
l
e
)
 
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


/
*
 
 
T
y
p
e
s
 
a
n
d
 
h
e
l
p
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
 
E
d
g
e
D
e
f
 
{


 
 
f
r
o
m
:
 
s
t
r
i
n
g
;


 
 
t
o
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
p
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
 
N
o
d
e
P
o
s
 
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
;


}




t
y
p
e
 
N
o
d
e
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
s
o
u
r
c
e
"
 
|
 
"
s
i
n
k
"
 
|
 
"
p
a
t
h
"
;


t
y
p
e
 
E
d
g
e
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
p
a
t
h
"
 
|
 
"
s
a
t
u
r
a
t
e
d
"
 
|
 
"
r
e
v
e
r
s
e
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
 
E
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


 
 
r
e
s
i
d
u
a
l
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


 
 
f
l
o
w
M
a
p
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


 
 
t
o
t
a
l
F
l
o
w
:
 
n
u
m
b
e
r
;


 
 
a
u
g
P
a
t
h
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


 
 
a
u
g
B
o
t
t
l
e
n
e
c
k
?
:
 
n
u
m
b
e
r
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
s
t
r
i
n
g
,
 
N
o
d
e
S
t
a
t
e
>
;


 
 
e
d
g
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
s
t
r
i
n
g
,
 
E
d
g
e
S
t
a
t
e
>
;


 
 
i
t
e
r
a
t
i
o
n
:
 
n
u
m
b
e
r
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
 
 
G
r
a
p
h
 
p
r
e
s
e
t
s
 
w
i
t
h
 
f
i
x
e
d
 
p
o
s
i
t
i
o
n
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
 
P
r
e
s
e
t
 
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


 
 
e
d
g
e
s
:
 
E
d
g
e
D
e
f
[
]
;


 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
;


 
 
s
i
n
k
:
 
s
t
r
i
n
g
;


 
 
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
 
N
o
d
e
P
o
s
>
;


}




c
o
n
s
t
 
P
R
E
S
E
T
S
:
 
P
r
e
s
e
t
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
c
l
r
s
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
L
R
S
 
2
6
.
1
"
,


 
 
 
 
s
o
u
r
c
e
:
 
"
S
"
,


 
 
 
 
s
i
n
k
:
 
"
T
"
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
A
"
,
 
c
a
p
:
 
1
0
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
C
"
,
 
c
a
p
:
 
1
0
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
B
"
,
 
c
a
p
:
 
4
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
C
"
,
 
c
a
p
:
 
2
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
D
"
,
 
c
a
p
:
 
8
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
1
0
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
C
"
,
 
t
o
:
 
"
D
"
,
 
c
a
p
:
 
9
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
D
"
,
 
t
o
:
 
"
B
"
,
 
c
a
p
:
 
6
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
D
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
1
0
 
}
,


 
 
 
 
]
,


 
 
 
 
p
o
s
:
 
{


 
 
 
 
 
 
S
:
 
{
 
x
:
 
6
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
 
 
A
:
 
{
 
x
:
 
2
0
0
,
 
y
:
 
7
0
 
}
,


 
 
 
 
 
 
B
:
 
{
 
x
:
 
3
4
0
,
 
y
:
 
7
0
 
}
,


 
 
 
 
 
 
C
:
 
{
 
x
:
 
2
0
0
,
 
y
:
 
2
3
0
 
}
,


 
 
 
 
 
 
D
:
 
{
 
x
:
 
3
4
0
,
 
y
:
 
2
3
0
 
}
,


 
 
 
 
 
 
T
:
 
{
 
x
:
 
4
8
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
}
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
w
o
p
a
t
h
s
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
w
o
 
p
a
t
h
s
"
,


 
 
 
 
s
o
u
r
c
e
:
 
"
S
"
,


 
 
 
 
s
i
n
k
:
 
"
T
"
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
A
"
,
 
c
a
p
:
 
5
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
B
"
,
 
c
a
p
:
 
5
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
5
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
5
 
}
,


 
 
 
 
]
,


 
 
 
 
p
o
s
:
 
{


 
 
 
 
 
 
S
:
 
{
 
x
:
 
6
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
 
 
A
:
 
{
 
x
:
 
2
4
0
,
 
y
:
 
8
0
 
}
,


 
 
 
 
 
 
B
:
 
{
 
x
:
 
2
4
0
,
 
y
:
 
2
2
0
 
}
,


 
 
 
 
 
 
T
:
 
{
 
x
:
 
4
2
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
}
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
b
o
t
t
l
e
n
e
c
k
"
,


 
 
 
 
l
a
b
e
l
:
 
"
B
o
t
t
l
e
n
e
c
k
"
,


 
 
 
 
s
o
u
r
c
e
:
 
"
S
"
,


 
 
 
 
s
i
n
k
:
 
"
T
"
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
A
"
,
 
c
a
p
:
 
1
0
0
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
B
"
,
 
c
a
p
:
 
1
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
1
0
0
 
}
,


 
 
 
 
]
,


 
 
 
 
p
o
s
:
 
{


 
 
 
 
 
 
S
:
 
{
 
x
:
 
6
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
 
 
A
:
 
{
 
x
:
 
2
0
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
 
 
B
:
 
{
 
x
:
 
3
4
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
 
 
T
:
 
{
 
x
:
 
4
8
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
}
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
a
n
c
e
l
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
n
c
e
l
 
t
r
i
c
k
"
,


 
 
 
 
s
o
u
r
c
e
:
 
"
S
"
,


 
 
 
 
s
i
n
k
:
 
"
T
"
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
A
"
,
 
c
a
p
:
 
3
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
S
"
,
 
t
o
:
 
"
B
"
,
 
c
a
p
:
 
3
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
B
"
,
 
c
a
p
:
 
3
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
3
 
}
,


 
 
 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
T
"
,
 
c
a
p
:
 
3
 
}
,


 
 
 
 
]
,


 
 
 
 
p
o
s
:
 
{


 
 
 
 
 
 
S
:
 
{
 
x
:
 
6
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
 
 
A
:
 
{
 
x
:
 
2
4
0
,
 
y
:
 
7
0
 
}
,


 
 
 
 
 
 
B
:
 
{
 
x
:
 
2
4
0
,
 
y
:
 
2
3
0
 
}
,


 
 
 
 
 
 
T
:
 
{
 
x
:
 
4
2
0
,
 
y
:
 
1
5
0
 
}
,


 
 
 
 
}
,


 
 
}
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
 
 
E
d
m
o
n
d
s
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
 
b
u
i
l
d
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




c
o
n
s
t
 
E
K
_
P
S
E
U
D
O
 
=
 
[


 
 
"
E
d
m
o
n
d
s
-
K
a
r
p
(
G
,
 
s
,
 
t
)
:
"
,


 
 
"
 
 
r
e
s
i
d
u
a
l
[
u
→
v
]
 
=
 
c
a
p
(
u
,
v
)
;
 
r
e
s
i
d
u
a
l
[
v
→
u
]
 
=
 
0
"
,


 
 
"
 
 
t
o
t
a
l
F
l
o
w
 
=
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
B
F
S
(
s
 
→
 
t
)
 
i
n
 
r
e
s
i
d
u
a
l
 
f
i
n
d
s
 
p
a
t
h
:
"
,


 
 
"
 
 
 
 
p
a
t
h
 
=
 
r
e
c
o
n
s
t
r
u
c
t
 
v
i
a
 
p
a
r
e
n
t
 
p
o
i
n
t
e
r
s
"
,


 
 
"
 
 
 
 
b
o
t
t
l
e
n
e
c
k
 
=
 
m
i
n
 
r
e
s
i
d
u
a
l
 
a
l
o
n
g
 
p
a
t
h
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
 
(
u
,
v
)
 
o
n
 
p
a
t
h
:
"
,


 
 
"
 
 
 
 
 
 
r
e
s
i
d
u
a
l
[
u
→
v
]
 
-
=
 
b
o
t
t
l
e
n
e
c
k
"
,


 
 
"
 
 
 
 
 
 
r
e
s
i
d
u
a
l
[
v
→
u
]
 
+
=
 
b
o
t
t
l
e
n
e
c
k
"
,


 
 
"
 
 
 
 
t
o
t
a
l
F
l
o
w
 
+
=
 
b
o
t
t
l
e
n
e
c
k
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
t
a
l
F
l
o
w
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
E
K
F
r
a
m
e
s
(
p
r
e
s
e
t
:
 
P
r
e
s
e
t
)
:
 
E
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
 
{
 
e
d
g
e
s
,
 
s
o
u
r
c
e
,
 
s
i
n
k
 
}
 
=
 
p
r
e
s
e
t
;


 
 
c
o
n
s
t
 
i
d
s
 
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


 
 
 
 
n
e
w
 
S
e
t
(
e
d
g
e
s
.
f
l
a
t
M
a
p
(
(
e
)
 
=
>
 
[
e
.
f
r
o
m
,
 
e
.
t
o
]
)
)


 
 
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
 
E
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


 
 
c
o
n
s
t
 
r
e
s
i
d
u
a
l
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


 
 
c
o
n
s
t
 
f
l
o
w
M
a
p
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


 
 
c
o
n
s
t
 
a
d
j
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
 
S
e
t
<
s
t
r
i
n
g
>
>
 
=
 
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


 
 
 
 
i
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
 
[
i
d
,
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
]
)


 
 
)
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
 
e
 
o
f
 
e
d
g
e
s
)
 
{


 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
c
o
n
s
t
 
r
k
 
=
 
`
$
{
e
.
t
o
}
-
$
{
e
.
f
r
o
m
}
`
;


 
 
 
 
r
e
s
i
d
u
a
l
[
k
]
 
=
 
(
r
e
s
i
d
u
a
l
[
k
]
 
?
?
 
0
)
 
+
 
e
.
c
a
p
;


 
 
 
 
i
f
 
(
r
e
s
i
d
u
a
l
[
r
k
]
 
=
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
 
r
e
s
i
d
u
a
l
[
r
k
]
 
=
 
0
;


 
 
 
 
f
l
o
w
M
a
p
[
k
]
 
=
 
0
;


 
 
 
 
a
d
j
[
e
.
f
r
o
m
]
.
a
d
d
(
e
.
t
o
)
;


 
 
 
 
a
d
j
[
e
.
t
o
]
.
a
d
d
(
e
.
f
r
o
m
)
;


 
 
}




 
 
l
e
t
 
t
o
t
a
l
F
l
o
w
 
=
 
0
;


 
 
l
e
t
 
i
t
e
r
a
t
i
o
n
 
=
 
0
;




 
 
c
o
n
s
t
 
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
 
(
p
a
t
h
:
 
s
t
r
i
n
g
[
]
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
 
N
o
d
e
S
t
a
t
e
>
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
n
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
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


 
 
 
 
 
 
i
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
 
[
i
d
,
 
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
 
N
o
d
e
S
t
a
t
e
]
)


 
 
 
 
)
;


 
 
 
 
n
s
[
s
o
u
r
c
e
]
 
=
 
"
s
o
u
r
c
e
"
;


 
 
 
 
n
s
[
s
i
n
k
]
 
=
 
"
s
i
n
k
"
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
 
v
 
o
f
 
p
a
t
h
)
 
{


 
 
 
 
 
 
i
f
 
(
v
 
!
=
=
 
s
o
u
r
c
e
 
&
&
 
v
 
!
=
=
 
s
i
n
k
)
 
n
s
[
v
]
 
=
 
"
p
a
t
h
"
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
n
s
;


 
 
}
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
S
t
a
t
e
s
 
=
 
(
p
a
t
h
:
 
s
t
r
i
n
g
[
]
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
 
E
d
g
e
S
t
a
t
e
>
 
=
>
 
{


 
 
 
 
c
o
n
s
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
s
t
r
i
n
g
,
 
E
d
g
e
S
t
a
t
e
>
 
=
 
{
}
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
 
+
 
1
 
<
 
p
a
t
h
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


 
 
 
 
 
 
e
s
[
`
$
{
p
a
t
h
[
i
]
}
-
$
{
p
a
t
h
[
i
 
+
 
1
]
}
`
]
 
=
 
"
p
a
t
h
"
;


 
 
 
 
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
 
e
 
o
f
 
e
d
g
e
s
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
 
 
i
f
 
(
r
e
s
i
d
u
a
l
[
k
]
 
=
=
=
 
0
 
&
&
 
!
e
s
[
k
]
)
 
e
s
[
k
]
 
=
 
"
s
a
t
u
r
a
t
e
d
"
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
e
s
;


 
 
}
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
,


 
 
 
 
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
 
=
 
{
}
,


 
 
 
 
p
a
t
h
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
,


 
 
 
 
b
o
t
t
l
e
n
e
c
k
?
:
 
n
u
m
b
e
r
,


 
 
)
 
=
>
 
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
,


 
 
 
 
 
 
v
a
r
s
,


 
 
 
 
 
 
m
e
s
s
a
g
e
,


 
 
 
 
 
 
r
e
s
i
d
u
a
l
:
 
{
 
.
.
.
r
e
s
i
d
u
a
l
 
}
,


 
 
 
 
 
 
f
l
o
w
M
a
p
:
 
{
 
.
.
.
f
l
o
w
M
a
p
 
}
,


 
 
 
 
 
 
t
o
t
a
l
F
l
o
w
,


 
 
 
 
 
 
a
u
g
P
a
t
h
:
 
[
.
.
.
p
a
t
h
]
,


 
 
 
 
 
 
a
u
g
B
o
t
t
l
e
n
e
c
k
:
 
b
o
t
t
l
e
n
e
c
k
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
(
p
a
t
h
)
,


 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
:
 
e
d
g
e
S
t
a
t
e
s
(
p
a
t
h
)
,


 
 
 
 
 
 
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


 
 
 
 
}
)
;


 
 
}
;




 
 
s
n
a
p
(
1
,
 
`
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
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
.
 
E
a
c
h
 
e
d
g
e
 
g
e
t
s
 
i
t
s
 
c
a
p
a
c
i
t
y
;
 
e
a
c
h
 
r
e
v
e
r
s
e
 
e
d
g
e
 
s
t
a
r
t
s
 
a
t
 
0
.
`
)
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


 
 
 
 
i
t
e
r
a
t
i
o
n
+
+
;


 
 
 
 
c
o
n
s
t
 
p
a
r
e
n
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
>
 
=
 
{
}
;


 
 
 
 
p
a
r
e
n
t
[
s
o
u
r
c
e
]
 
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


 
 
 
 
c
o
n
s
t
 
v
i
s
i
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
s
t
r
i
n
g
>
(
[
s
o
u
r
c
e
]
)
;


 
 
 
 
c
o
n
s
t
 
Q
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
s
o
u
r
c
e
]
;


 
 
 
 
s
n
a
p
(
3
,
 
`
I
t
e
r
a
t
i
o
n
 
$
{
i
t
e
r
a
t
i
o
n
}
:
 
B
F
S
 
f
r
o
m
 
$
{
s
o
u
r
c
e
}
 
t
o
 
f
i
n
d
 
a
n
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
i
n
 
t
h
e
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
.
`
,
 
{
 
i
t
e
r
:
 
i
t
e
r
a
t
i
o
n
 
}
)
;




 
 
 
 
l
e
t
 
f
o
u
n
d
 
=
 
f
a
l
s
e
;


 
 
 
 
w
h
i
l
e
 
(
Q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
u
 
=
 
Q
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
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
v
i
s
i
t
e
d
.
h
a
s
(
v
)
 
&
&
 
(
r
e
s
i
d
u
a
l
[
`
$
{
u
}
-
$
{
v
}
`
]
 
?
?
 
0
)
 
>
 
0
)
 
{


 
 
 
 
 
 
 
 
 
 
v
i
s
i
t
e
d
.
a
d
d
(
v
)
;


 
 
 
 
 
 
 
 
 
 
p
a
r
e
n
t
[
v
]
 
=
 
u
;


 
 
 
 
 
 
 
 
 
 
Q
.
p
u
s
h
(
v
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
v
 
=
=
=
 
s
i
n
k
)
 
{
 
f
o
u
n
d
 
=
 
t
r
u
e
;
 
b
r
e
a
k
;
 
}


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
f
o
u
n
d
)
 
b
r
e
a
k
;


 
 
 
 
}




 
 
 
 
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
 
{


 
 
 
 
 
 
s
n
a
p
(
3
,
 
`
B
F
S
 
c
o
u
l
d
 
n
o
t
 
r
e
a
c
h
 
$
{
s
i
n
k
}
 
i
n
 
t
h
e
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
.
 
N
o
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
e
x
i
s
t
s
.
 
D
O
N
E
,
 
m
a
x
 
f
l
o
w
 
=
 
$
{
t
o
t
a
l
F
l
o
w
}
.
`
,
 
{
 
t
o
t
a
l
F
l
o
w
,
 
i
t
e
r
:
 
i
t
e
r
a
t
i
o
n
 
}
,
 
[
]
,
 
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


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
p
a
t
h
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


 
 
 
 
l
e
t
 
c
u
r
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
 
=
 
s
i
n
k
;


 
 
 
 
w
h
i
l
e
 
(
c
u
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
 
p
a
t
h
.
u
n
s
h
i
f
t
(
c
u
r
)
;
 
c
u
r
 
=
 
p
a
r
e
n
t
[
c
u
r
]
;
 
}




 
 
 
 
s
n
a
p
(
4
,
 
`
A
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
f
o
u
n
d
:
 
$
{
p
a
t
h
.
j
o
i
n
(
"
 
→
 
"
)
}
.
`
,
 
{
 
p
a
t
h
:
 
p
a
t
h
.
j
o
i
n
(
"
→
"
)
,
 
i
t
e
r
:
 
i
t
e
r
a
t
i
o
n
 
}
,
 
p
a
t
h
)
;




 
 
 
 
l
e
t
 
b
o
t
t
l
e
n
e
c
k
 
=
 
I
n
f
i
n
i
t
y
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
 
+
 
1
 
<
 
p
a
t
h
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
 
c
 
=
 
r
e
s
i
d
u
a
l
[
`
$
{
p
a
t
h
[
i
]
}
-
$
{
p
a
t
h
[
i
 
+
 
1
]
}
`
]
 
?
?
 
0
;


 
 
 
 
 
 
i
f
 
(
c
 
<
 
b
o
t
t
l
e
n
e
c
k
)
 
b
o
t
t
l
e
n
e
c
k
 
=
 
c
;


 
 
 
 
}


 
 
 
 
s
n
a
p
(
5
,
 
`
B
o
t
t
l
e
n
e
c
k
 
=
 
m
i
n
 
r
e
s
i
d
u
a
l
 
a
l
o
n
g
 
p
a
t
h
 
=
 
$
{
b
o
t
t
l
e
n
e
c
k
}
.
`
,
 
{
 
b
o
t
t
l
e
n
e
c
k
,
 
i
t
e
r
:
 
i
t
e
r
a
t
i
o
n
 
}
,
 
p
a
t
h
,
 
b
o
t
t
l
e
n
e
c
k
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
 
+
 
1
 
<
 
p
a
t
h
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
 
u
 
=
 
p
a
t
h
[
i
]
,
 
v
 
=
 
p
a
t
h
[
i
 
+
 
1
]
;


 
 
 
 
 
 
r
e
s
i
d
u
a
l
[
`
$
{
u
}
-
$
{
v
}
`
]
 
-
=
 
b
o
t
t
l
e
n
e
c
k
;


 
 
 
 
 
 
r
e
s
i
d
u
a
l
[
`
$
{
v
}
-
$
{
u
}
`
]
 
=
 
(
r
e
s
i
d
u
a
l
[
`
$
{
v
}
-
$
{
u
}
`
]
 
?
?
 
0
)
 
+
 
b
o
t
t
l
e
n
e
c
k
;


 
 
 
 
 
 
i
f
 
(
f
l
o
w
M
a
p
[
`
$
{
u
}
-
$
{
v
}
`
]
 
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


 
 
 
 
 
 
 
 
f
l
o
w
M
a
p
[
`
$
{
u
}
-
$
{
v
}
`
]
 
+
=
 
b
o
t
t
l
e
n
e
c
k
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
f
l
o
w
M
a
p
[
`
$
{
v
}
-
$
{
u
}
`
]
 
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


 
 
 
 
 
 
 
 
f
l
o
w
M
a
p
[
`
$
{
v
}
-
$
{
u
}
`
]
 
-
=
 
b
o
t
t
l
e
n
e
c
k
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
t
o
t
a
l
F
l
o
w
 
+
=
 
b
o
t
t
l
e
n
e
c
k
;




 
 
 
 
s
n
a
p
(
9
,
 
`
P
u
s
h
e
d
 
$
{
b
o
t
t
l
e
n
e
c
k
}
 
u
n
i
t
s
.
 
F
o
r
w
a
r
d
 
r
e
s
i
d
u
a
l
s
 
d
e
c
r
e
a
s
e
;
 
r
e
v
e
r
s
e
 
r
e
s
i
d
u
a
l
s
 
i
n
c
r
e
a
s
e
.
 
T
o
t
a
l
 
f
l
o
w
 
=
 
$
{
t
o
t
a
l
F
l
o
w
}
.
`
,
 
{
 
p
u
s
h
e
d
:
 
b
o
t
t
l
e
n
e
c
k
,
 
t
o
t
a
l
F
l
o
w
,
 
i
t
e
r
:
 
i
t
e
r
a
t
i
o
n
 
}
,
 
p
a
t
h
,
 
b
o
t
t
l
e
n
e
c
k
)
;


 
 
}




 
 
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
 
 
F
l
o
w
 
n
e
t
w
o
r
k
 
S
V
G
 
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




c
o
n
s
t
 
N
O
D
E
_
R
 
=
 
2
0
;


c
o
n
s
t
 
S
V
G
_
W
 
=
 
5
6
0
;


c
o
n
s
t
 
S
V
G
_
H
 
=
 
3
0
0
;




f
u
n
c
t
i
o
n
 
a
r
r
o
w
P
a
t
h
(


 
 
x
1
:
 
n
u
m
b
e
r
,
 
y
1
:
 
n
u
m
b
e
r
,


 
 
x
2
:
 
n
u
m
b
e
r
,
 
y
2
:
 
n
u
m
b
e
r
,


 
 
r
:
 
n
u
m
b
e
r
,


)
:
 
{
 
d
x
1
:
 
n
u
m
b
e
r
;
 
d
y
1
:
 
n
u
m
b
e
r
;
 
d
x
2
:
 
n
u
m
b
e
r
;
 
d
y
2
:
 
n
u
m
b
e
r
;
 
m
x
:
 
n
u
m
b
e
r
;
 
m
y
:
 
n
u
m
b
e
r
 
}
 
{


 
 
c
o
n
s
t
 
d
x
 
=
 
x
2
 
-
 
x
1
;


 
 
c
o
n
s
t
 
d
y
 
=
 
y
2
 
-
 
y
1
;


 
 
c
o
n
s
t
 
l
e
n
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
 
|
|
 
1
;


 
 
c
o
n
s
t
 
n
x
 
=
 
d
x
 
/
 
l
e
n
;


 
 
c
o
n
s
t
 
n
y
 
=
 
d
y
 
/
 
l
e
n
;


 
 
r
e
t
u
r
n
 
{


 
 
 
 
d
x
1
:
 
x
1
 
+
 
n
x
 
*
 
r
,


 
 
 
 
d
y
1
:
 
y
1
 
+
 
n
y
 
*
 
r
,


 
 
 
 
d
x
2
:
 
x
2
 
-
 
n
x
 
*
 
(
r
 
+
 
8
)
,


 
 
 
 
d
y
2
:
 
y
2
 
-
 
n
y
 
*
 
(
r
 
+
 
8
)
,


 
 
 
 
m
x
:
 
(
x
1
 
+
 
x
2
)
 
/
 
2
,


 
 
 
 
m
y
:
 
(
y
1
 
+
 
y
2
)
 
/
 
2
,


 
 
}
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
l
o
w
N
e
t
w
o
r
k
S
V
G
P
r
o
p
s
 
{


 
 
p
r
e
s
e
t
:
 
P
r
e
s
e
t
;


 
 
f
r
a
m
e
:
 
E
K
F
r
a
m
e
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
 
F
l
o
w
N
e
t
w
o
r
k
S
V
G
(
{
 
p
r
e
s
e
t
,
 
f
r
a
m
e
 
}
:
 
F
l
o
w
N
e
t
w
o
r
k
S
V
G
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
 
{
 
e
d
g
e
s
,
 
p
o
s
 
}
 
=
 
p
r
e
s
e
t
;




 
 
c
o
n
s
t
 
n
o
d
e
C
o
l
o
r
 
=
 
(
s
t
a
t
e
:
 
N
o
d
e
S
t
a
t
e
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
s
o
u
r
c
e
"
)
 
r
e
t
u
r
n
 
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
;


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
s
i
n
k
"
)
 
r
e
t
u
r
n
 
"
#
3
8
b
d
f
8
"
;
 
/
/
 
s
k
y
-
4
0
0


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
)
 
r
e
t
u
r
n
 
"
#
f
b
9
2
3
c
"
;
 
/
/
 
o
r
a
n
g
e
-
4
0
0


 
 
 
 
r
e
t
u
r
n
 
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


 
 
}
;




 
 
c
o
n
s
t
 
n
o
d
e
T
e
x
t
C
o
l
o
r
 
=
 
(
s
t
a
t
e
:
 
N
o
d
e
S
t
a
t
e
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
s
o
u
r
c
e
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
s
i
n
k
"
)
 
r
e
t
u
r
n
 
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
;


 
 
 
 
r
e
t
u
r
n
 
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
;


 
 
}
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
C
o
l
o
r
 
=
 
(
s
t
a
t
e
:
 
E
d
g
e
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
 
=
>
 
{


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
)
 
r
e
t
u
r
n
 
"
#
f
b
9
2
3
c
"
;


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
s
a
t
u
r
a
t
e
d
"
)
 
r
e
t
u
r
n
 
"
#
f
b
b
f
2
4
"
;


 
 
 
 
r
e
t
u
r
n
 
"
#
a
8
a
2
9
e
"
;
 
/
/
 
s
t
o
n
e
-
4
0
0


 
 
}
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
W
i
d
t
h
 
=
 
(
s
t
a
t
e
:
 
E
d
g
e
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
 
=
>
 
{


 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
)
 
r
e
t
u
r
n
 
3
;


 
 
 
 
r
e
t
u
r
n
 
1
.
5
;


 
 
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
S
V
G
_
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
S
V
G
_
H
}


 
 
 
 
 
 
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
S
V
G
_
W
}
 
$
{
S
V
G
_
H
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
 
b
l
o
c
k
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
S
V
G
_
H
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
o
w
-
d
e
f
a
u
l
t
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
a
8
a
2
9
e
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
o
w
-
p
a
t
h
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
f
b
9
2
3
c
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
o
w
-
s
a
t
u
r
a
t
e
d
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
f
b
b
f
2
4
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
{
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
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
 
{
 
d
x
1
,
 
d
y
1
,
 
d
x
2
,
 
d
y
2
,
 
m
x
,
 
m
y
 
}
 
=
 
a
r
r
o
w
P
a
t
h
(
p
1
.
x
,
 
p
1
.
y
,
 
p
2
.
x
,
 
p
2
.
y
,
 
N
O
D
E
_
R
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
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
 
f
r
a
m
e
.
e
d
g
e
S
t
a
t
e
s
[
k
e
y
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
 
=
 
e
d
g
e
C
o
l
o
r
(
s
t
a
t
e
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
 
=
 
e
d
g
e
W
i
d
t
h
(
s
t
a
t
e
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
 
=
 
f
r
a
m
e
.
f
l
o
w
M
a
p
[
k
e
y
]
 
?
?
 
0
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
a
r
k
e
r
I
d
 
=


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
a
r
r
o
w
-
p
a
t
h
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
t
a
t
e
 
=
=
=
 
"
s
a
t
u
r
a
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
a
r
r
o
w
-
s
a
t
u
r
a
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
a
r
r
o
w
-
d
e
f
a
u
l
t
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
i
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
d
x
1
}
 
y
1
=
{
d
y
1
}
 
x
2
=
{
d
x
2
}
 
y
2
=
{
d
y
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
c
o
l
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
w
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
E
n
d
=
{
`
u
r
l
(
#
$
{
m
a
r
k
e
r
I
d
}
)
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
s
t
r
o
k
e
 
0
.
2
5
s
,
 
s
t
r
o
k
e
-
w
i
d
t
h
 
0
.
2
5
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
m
x
 
-
 
1
8
}
 
y
=
{
m
y
 
-
 
9
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
3
6
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
7
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
 
?
 
"
#
f
f
f
7
e
d
"
 
:
 
"
#
f
a
f
a
f
9
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
 
?
 
"
#
f
b
9
2
3
c
"
 
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
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
 
?
 
1
.
5
 
:
 
1
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
m
x
}
 
y
=
{
m
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
"
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
 
?
 
"
#
c
2
4
1
0
c
"
 
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
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
}
/
{
e
.
c
a
p
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
s
)
.
m
a
p
(
(
[
i
d
,
 
p
]
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
a
t
e
 
=
 
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
S
t
a
t
e
s
[
i
d
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
 
n
o
d
e
C
o
l
o
r
(
s
t
a
t
e
)
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
C
o
l
 
=
 
n
o
d
e
T
e
x
t
C
o
l
o
r
(
s
t
a
t
e
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
g
 
k
e
y
=
{
i
d
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
N
O
D
E
_
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
s
t
a
t
e
 
=
=
=
 
"
p
a
t
h
"
 
?
 
"
#
e
a
5
8
0
c
"
 
:
 
s
t
a
t
e
 
=
=
=
 
"
s
o
u
r
c
e
"
 
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
D
a
r
k
 
:
 
s
t
a
t
e
 
=
=
=
 
"
s
i
n
k
"
 
?
 
"
#
0
2
8
4
c
7
"
 
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
M
u
t
e
d
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
s
t
a
t
e
 
!
=
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
 
?
 
2
.
5
 
:
 
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
2
5
s
,
 
s
t
r
o
k
e
 
0
.
2
5
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
1
2
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
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
t
e
x
t
C
o
l
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
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
 
 
E
d
g
e
 
f
l
o
w
 
s
i
d
e
 
p
a
n
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
E
d
g
e
F
l
o
w
P
a
n
e
l
(
{
 
p
r
e
s
e
t
,
 
f
r
a
m
e
 
}
:
 
{
 
p
r
e
s
e
t
:
 
P
r
e
s
e
t
;
 
f
r
a
m
e
:
 
E
K
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
 
{
 
e
d
g
e
s
 
}
 
=
 
p
r
e
s
e
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
1
"
>


 
 
 
 
 
 
 
 
t
o
t
a
l
 
f
l
o
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
l
a
c
k
 
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
 
l
e
a
d
i
n
g
-
n
o
n
e
 
m
b
-
3
 
t
a
b
u
l
a
r
-
n
u
m
s
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
F
l
o
w
}


 
 
 
 
 
 
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
.
a
u
g
B
o
t
t
l
e
n
e
c
k
 
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
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
L
a
s
t
 
b
o
t
t
l
e
n
e
c
k
:
 
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
a
m
b
e
r
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
a
u
g
B
o
t
t
l
e
n
e
c
k
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


 
 
 
 
 
 
)
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
1
"
>


 
 
 
 
 
 
 
 
e
d
g
e
 
f
l
o
w
s
 
(
f
 
/
 
c
a
p
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
c
o
l
 
g
a
p
-
1
 
m
a
x
-
h
-
4
8
 
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
 
=
 
f
r
a
m
e
.
f
l
o
w
M
a
p
[
k
]
 
?
?
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
a
t
i
o
 
=
 
f
 
/
 
e
.
c
a
p
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
n
P
a
t
h
 
=
 
f
r
a
m
e
.
a
u
g
P
a
t
h
.
s
o
m
e
(


 
 
 
 
 
 
 
 
 
 
 
 
(
_
,
 
i
d
x
)
 
=
>
 
f
r
a
m
e
.
a
u
g
P
a
t
h
[
i
d
x
]
 
=
=
=
 
e
.
f
r
o
m
 
&
&
 
f
r
a
m
e
.
a
u
g
P
a
t
h
[
i
d
x
 
+
 
1
]
 
=
=
=
 
e
.
t
o


 
 
 
 
 
 
 
 
 
 
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
 
p
x
-
2
 
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
 
b
o
r
d
e
r
 
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
 
o
n
P
a
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
2
5
1
,
1
4
6
,
6
0
,
0
.
1
2
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
a
t
i
o
 
>
=
 
1


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
2
5
1
,
1
9
1
,
3
6
,
0
.
1
2
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
a
t
i
o
 
>
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
1
0
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
o
n
P
a
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
2
5
1
,
1
4
6
,
6
0
,
0
.
5
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
a
t
i
o
 
>
=
 
1


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
2
5
1
,
1
9
1
,
3
6
,
0
.
5
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
e
.
f
r
o
m
}
→
{
e
.
t
o
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
a
b
u
l
a
r
-
n
u
m
s
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
:
 
r
a
t
i
o
 
>
=
 
1
 
?
 
"
#
9
2
4
0
0
e
"
 
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
M
u
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
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
{
f
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
/
{
e
.
c
a
p
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
 
p
t
-
2
 
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


 
 
 
 
 
 
 
 
I
t
e
r
a
t
i
o
n
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
s
t
o
n
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
s
t
o
n
e
-
3
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
i
t
e
r
a
t
i
o
n
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
b
r
 
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
i
t
a
l
i
c
"
>
S
a
t
u
r
a
t
e
d
 
e
d
g
e
s
 
r
e
v
e
a
l
 
t
h
e
 
m
i
n
-
c
u
t
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
p
r
e
s
e
t
I
d
,
 
s
e
t
P
r
e
s
e
t
I
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
(
"
c
l
r
s
"
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
s
e
t
 
=
 
P
R
E
S
E
T
S
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
 
p
r
e
s
e
t
I
d
)
 
?
?
 
P
R
E
S
E
T
S
[
0
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
E
K
F
r
a
m
e
s
(
p
r
e
s
e
t
)
,
 
[
p
r
e
s
e
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
{
`
M
a
x
-
F
l
o
w
 
(
E
d
m
o
n
d
s
-
K
a
r
p
)
,
 
$
{
p
r
e
s
e
t
.
s
o
u
r
c
e
}
 
→
 
$
{
p
r
e
s
e
t
.
s
i
n
k
}
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
 
g
r
a
p
h
 
p
r
e
s
e
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
P
R
E
S
E
T
S
.
m
a
p
(
(
p
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
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
p
r
e
s
e
t
I
d
 
=
=
=
 
p
.
i
d
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
P
r
e
s
e
t
I
d
(
p
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
E
d
g
e
F
l
o
w
P
a
n
e
l
 
p
r
e
s
e
t
=
{
p
r
e
s
e
t
}
 
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
 
?
?
 
{
 
t
o
t
a
l
F
l
o
w
:
 
0
,
 
f
l
o
w
M
a
p
:
 
{
}
,
 
a
u
g
P
a
t
h
:
 
[
]
,
 
a
u
g
B
o
t
t
l
e
n
e
c
k
:
 
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
 
e
d
g
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
 
i
t
e
r
a
t
i
o
n
:
 
0
,
 
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
"
,
 
r
e
s
i
d
u
a
l
:
 
{
}
 
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
E
K
_
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
[
"
t
o
t
a
l
F
l
o
w
"
,
 
"
b
o
t
t
l
e
n
e
c
k
"
,
 
"
p
u
s
h
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
F
l
o
w
N
e
t
w
o
r
k
S
V
G
 
p
r
e
s
e
t
=
{
p
r
e
s
e
t
}
 
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
 
?
?
 
{
 
t
o
t
a
l
F
l
o
w
:
 
0
,
 
f
l
o
w
M
a
p
:
 
{
}
,
 
a
u
g
P
a
t
h
:
 
[
]
,
 
a
u
g
B
o
t
t
l
e
n
e
c
k
:
 
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
 
e
d
g
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
 
i
t
e
r
a
t
i
o
n
:
 
0
,
 
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
"
,
 
r
e
s
i
d
u
a
l
:
 
{
}
 
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
w
r
a
p
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
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
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
s
o
u
r
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
 
c
l
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
b
l
o
c
k
 
w
-
3
 
h
-
3
 
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
#
3
8
b
d
f
8
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
s
i
n
k


 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
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
#
f
b
9
2
3
c
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h


 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
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
#
f
b
b
f
2
4
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
s
a
t
u
r
a
t
e
d
 
e
d
g
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
 
c
l
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
1
0
p
x
]
 
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
e
d
g
e
 
l
a
b
e
l
 
=
 
f
l
o
w
 
/
 
c
a
p
a
c
i
t
y
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
 
E
d
m
o
n
d
s
-
K
a
r
p
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
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
W
h
a
t
 
i
s
 
m
a
x
-
f
l
o
w
?
"
,
 
b
:
 
"
G
i
v
e
n
 
a
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
 
w
i
t
h
 
e
d
g
e
 
c
a
p
a
c
i
t
i
e
s
,
 
a
 
s
o
u
r
c
e
 
s
,
 
a
n
d
 
a
 
s
i
n
k
 
t
,
 
f
i
n
d
 
t
h
e
 
m
a
x
i
m
u
m
 
a
m
o
u
n
t
 
o
f
 
f
l
o
w
 
t
h
a
t
 
c
a
n
 
b
e
 
s
e
n
t
 
f
r
o
m
 
s
 
t
o
 
t
 
s
u
c
h
 
t
h
a
t
 
(
1
)
 
e
v
e
r
y
 
e
d
g
e
'
s
 
f
l
o
w
 
i
s
 
a
t
 
m
o
s
t
 
i
t
s
 
c
a
p
a
c
i
t
y
 
a
n
d
 
(
2
)
 
f
l
o
w
 
c
o
n
s
e
r
v
a
t
i
o
n
 
h
o
l
d
s
 
a
t
 
e
v
e
r
y
 
i
n
t
e
r
i
o
r
 
n
o
d
e
 
(
i
n
 
e
q
u
a
l
s
 
o
u
t
)
.
 
T
h
e
 
c
l
a
s
s
i
c
a
l
 
m
o
d
e
l
 
f
o
r
 
p
i
p
e
s
,
 
t
r
a
f
f
i
c
,
 
b
a
n
d
w
i
d
t
h
,
 
s
u
p
p
l
y
 
n
e
t
w
o
r
k
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
F
o
r
d
-
F
u
l
k
e
r
s
o
n
 
m
e
t
h
o
d
"
,
 
b
:
 
"
W
h
i
l
e
 
t
h
e
r
e
 
e
x
i
s
t
s
 
a
n
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
f
r
o
m
 
s
 
t
o
 
t
 
i
n
 
t
h
e
 
R
E
S
I
D
U
A
L
 
g
r
a
p
h
:
 
f
i
n
d
 
t
h
e
 
b
o
t
t
l
e
n
e
c
k
 
c
a
p
a
c
i
t
y
 
a
l
o
n
g
 
i
t
,
 
p
u
s
h
 
t
h
a
t
 
m
u
c
h
 
f
l
o
w
,
 
u
p
d
a
t
e
 
t
h
e
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
 
(
f
o
r
w
a
r
d
 
d
e
c
r
e
a
s
e
s
,
 
r
e
v
e
r
s
e
 
i
n
c
r
e
a
s
e
s
 
f
o
r
 
c
a
n
c
e
l
l
a
t
i
o
n
)
.
 
S
t
o
p
 
w
h
e
n
 
n
o
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
e
x
i
s
t
s
.
 
R
e
t
u
r
n
s
 
o
p
t
i
m
a
l
 
m
a
x
-
f
l
o
w
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
y
 
r
e
v
e
r
s
e
 
e
d
g
e
s
?
"
,
 
b
:
 
"
T
h
e
 
r
e
v
e
r
s
e
 
r
e
s
i
d
u
a
l
 
c
a
p
a
c
i
t
y
 
l
e
t
s
 
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
 
c
a
n
c
e
l
 
a
 
p
r
e
v
i
o
u
s
 
w
r
o
n
g
 
c
h
o
i
c
e
.
 
W
i
t
h
o
u
t
 
i
t
,
 
a
 
g
r
e
e
d
y
 
f
i
r
s
t
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
c
o
u
l
d
 
l
o
c
k
 
y
o
u
 
o
u
t
 
o
f
 
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
.
 
R
e
v
e
r
s
e
 
e
d
g
e
s
 
l
e
t
 
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
 
u
n
d
o
 
d
e
c
i
s
i
o
n
s
 
i
n
 
f
u
t
u
r
e
 
i
t
e
r
a
t
i
o
n
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
E
d
m
o
n
d
s
-
K
a
r
p
 
=
 
F
F
 
+
 
B
F
S
"
,
 
b
:
 
"
P
i
c
k
 
t
h
e
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
u
s
i
n
g
 
B
F
S
 
(
s
h
o
r
t
e
s
t
 
i
n
 
n
u
m
b
e
r
 
o
f
 
e
d
g
e
s
,
 
n
o
t
 
b
o
t
t
l
e
n
e
c
k
)
.
 
T
h
i
s
 
b
o
u
n
d
s
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
a
u
g
m
e
n
t
a
t
i
o
n
s
 
t
o
 
O
(
V
*
E
)
,
 
g
i
v
i
n
g
 
t
o
t
a
l
 
O
(
V
*
E
^
2
)
.
 
C
r
i
t
i
c
a
l
:
 
B
F
S
 
g
u
a
r
a
n
t
e
e
s
 
t
e
r
m
i
n
a
t
i
o
n
 
o
n
 
i
r
r
a
t
i
o
n
a
l
 
c
a
p
a
c
i
t
i
e
s
,
 
w
h
e
r
e
 
n
a
i
v
e
 
F
o
r
d
-
F
u
l
k
e
r
s
o
n
 
c
a
n
 
s
p
i
n
 
f
o
r
e
v
e
r
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
M
i
n
-
C
u
t
 
=
 
M
a
x
-
F
l
o
w
 
(
t
h
e
 
d
u
a
l
i
t
y
)
"
,
 
b
:
 
"
A
 
C
U
T
 
i
s
 
a
 
p
a
r
t
i
t
i
o
n
 
o
f
 
v
e
r
t
i
c
e
s
 
i
n
t
o
 
S
 
(
c
o
n
t
a
i
n
i
n
g
 
s
o
u
r
c
e
)
 
a
n
d
 
T
 
(
c
o
n
t
a
i
n
i
n
g
 
s
i
n
k
)
.
 
C
u
t
 
c
a
p
a
c
i
t
y
 
=
 
s
u
m
 
o
f
 
c
a
p
a
c
i
t
i
e
s
 
o
f
 
e
d
g
e
s
 
c
r
o
s
s
i
n
g
 
S
 
t
o
 
T
.
 
T
h
e
o
r
e
m
 
(
F
o
r
d
-
F
u
l
k
e
r
s
o
n
 
1
9
5
6
)
:
 
m
a
x
 
f
l
o
w
 
v
a
l
u
e
 
=
 
m
i
n
 
c
u
t
 
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
h
e
 
s
a
t
u
r
a
t
e
d
 
e
d
g
e
s
 
i
n
 
y
o
u
r
 
f
i
n
a
l
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
 
A
R
E
 
t
h
e
 
m
i
n
 
c
u
t
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
B
i
p
a
r
t
i
t
e
 
m
a
t
c
h
i
n
g
 
a
s
 
m
a
x
-
f
l
o
w
"
,
 
b
:
 
"
M
a
x
i
m
u
m
 
m
a
t
c
h
i
n
g
 
i
n
 
a
 
b
i
p
a
r
t
i
t
e
 
g
r
a
p
h
 
(
l
e
f
t
 
s
e
t
 
L
,
 
r
i
g
h
t
 
s
e
t
 
R
)
 
r
e
d
u
c
e
s
 
t
o
 
m
a
x
-
f
l
o
w
:
 
a
d
d
 
a
 
s
o
u
r
c
e
 
c
o
n
n
e
c
t
e
d
 
t
o
 
a
l
l
 
o
f
 
L
 
(
c
a
p
 
1
)
,
 
a
l
l
 
o
f
 
R
 
c
o
n
n
e
c
t
e
d
 
t
o
 
a
 
s
i
n
k
 
(
c
a
p
 
1
)
,
 
e
v
e
r
y
 
o
r
i
g
i
n
a
l
 
e
d
g
e
 
h
a
s
 
c
a
p
 
1
.
 
M
a
x
 
f
l
o
w
 
=
 
m
a
x
 
m
a
t
c
h
i
n
g
 
s
i
z
e
.
 
T
h
i
s
 
i
s
 
w
h
y
 
m
a
x
-
f
l
o
w
 
i
s
 
e
v
e
r
y
w
h
e
r
e
 
i
n
 
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
 
a
s
s
i
g
n
m
e
n
t
,
 
a
n
d
 
o
p
t
i
m
i
z
a
t
i
o
n
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
i
p
e
s
,
 
r
e
s
i
d
u
a
l
s
,
 
a
n
d
 
c
u
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
:
 
p
i
p
e
s
 
f
r
o
m
 
r
e
s
e
r
v
o
i
r
 
t
o
 
s
i
n
k
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


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
p
i
p
e
s
 
f
r
o
m
 
a
 
r
e
s
e
r
v
o
i
r
 
(
s
o
u
r
c
e
)
 
t
o
 
a
 
s
i
n
k
.
 
E
a
c
h
 
p
i
p
e
 
h
a
s
 
a
 
f
l
o
w
 
c
a
p
a
c
i
t
y
.
 
M
a
x
-
f
l
o
w
 
a
s
k
s
:
 
w
h
a
t
 
i
s
 
t
h
e
 
m
o
s
t
 
y
o
u
 
c
a
n
 
p
u
s
h
 
t
h
r
o
u
g
h
?
 
T
h
e
 
c
l
e
v
e
r
 
t
r
i
c
k
 
i
s
 
t
h
e
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
,
 
a
t
 
a
n
y
 
m
o
m
e
n
t
 
y
o
u
 
c
a
n
 
s
e
n
d
 
f
l
o
w
 
b
a
c
k
w
a
r
d
 
a
g
a
i
n
s
t
 
a
n
y
 
p
i
p
e
 
t
h
a
t
 
i
s
 
a
l
r
e
a
d
y
 
c
a
r
r
y
i
n
g
 
f
l
o
w
,
 
w
h
i
c
h
 
i
s
 
m
a
t
h
e
m
a
t
i
c
a
l
l
y
 
a
 
w
a
y
 
o
f
 
c
a
n
c
e
l
l
i
n
g
 
a
n
d
 
r
e
r
o
u
t
i
n
g
.
 
E
d
m
o
n
d
s
-
K
a
r
p
 
f
i
n
d
s
 
t
h
e
 
r
i
g
h
t
 
a
u
g
m
e
n
t
a
t
i
o
n
s
 
i
n
 
B
F
S
 
o
r
d
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
c
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
{
c
.
t
}
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
{
c
.
b
}
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
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
O
n
 
t
h
e
 
C
L
R
S
 
p
r
e
s
e
t
 
S
>
A
:
1
0
,
 
S
>
C
:
1
0
,
 
A
>
B
:
4
,
 
A
>
C
:
2
,
 
A
>
D
:
8
,
 
B
>
T
:
1
0
,
 
C
>
D
:
9
,
 
D
>
B
:
6
,
 
D
>
T
:
1
0
,
 
w
h
a
t
 
i
s
 
t
h
e
 
m
a
x
 
f
l
o
w
 
S
 
t
o
 
T
?
"
,
 
a
:
 
"
1
9
"
 
}
,


 
 
 
 
{
 
q
:
 
"
O
n
 
'
T
w
o
 
p
a
t
h
s
'
 
S
>
A
:
5
,
 
S
>
B
:
5
,
 
A
>
T
:
5
,
 
B
>
T
:
5
,
 
m
a
x
 
f
l
o
w
?
"
,
 
a
:
 
"
1
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
O
n
 
'
B
o
t
t
l
e
n
e
c
k
'
 
S
>
A
:
1
0
0
,
 
A
>
B
:
1
,
 
B
>
T
:
1
0
0
,
 
m
a
x
 
f
l
o
w
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
W
h
y
 
d
o
e
s
 
m
a
x
-
f
l
o
w
 
e
q
u
a
l
 
m
i
n
-
c
u
t
 
i
n
t
u
i
t
i
v
e
l
y
?
"
,
 
a
:
 
"
E
v
e
r
y
 
f
l
o
w
 
p
a
t
h
 
c
r
o
s
s
e
s
 
t
h
e
 
c
u
t
,
 
s
o
 
f
l
o
w
 
i
s
 
a
t
 
m
o
s
t
 
c
u
t
 
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
h
e
 
a
u
g
m
e
n
t
i
n
g
-
p
a
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
'
s
 
s
t
o
p
p
i
n
g
 
c
o
n
d
i
t
i
o
n
 
g
i
v
e
s
 
e
q
u
a
l
i
t
y
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
R
u
n
 
e
a
c
h
 
p
r
e
s
e
t
 
i
n
 
t
h
e
 
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
 
t
o
 
v
e
r
i
f
y
 
o
n
c
e
 
t
h
e
 
a
n
i
m
a
t
i
o
n
 
i
s
 
r
e
a
d
y
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
s
t
o
n
e
-
2
0
0
 
m
b
-
3
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
 
m
r
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
q
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
 
d
a
r
k
:
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
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
i
n
W
i
d
t
h
:
 
2
4
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
l
i
m
e
-
4
0
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
a
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
4
"
>


 
 
 
 
 
 
<
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
e
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
p
x
-
5
 
p
t
-
5
 
p
b
-
2
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
A
l
g
o
r
i
t
h
m
 
z
o
o
,
 
w
h
e
n
 
t
o
 
u
s
e
 
w
h
i
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
A
l
g
o
r
i
t
h
m
"
,
 
"
C
o
m
p
l
e
x
i
t
y
"
,
 
"
N
o
t
e
s
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
4
 
p
y
-
2
 
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
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
F
o
r
d
-
F
u
l
k
e
r
s
o
n
 
(
D
F
S
)
"
,
 
"
O
(
E
 
*
 
m
a
x
_
f
l
o
w
)
"
,
 
"
C
a
n
 
f
a
i
l
 
t
o
 
t
e
r
m
i
n
a
t
e
 
o
n
 
i
r
r
a
t
i
o
n
a
l
 
c
a
p
a
c
i
t
i
e
s
.
 
D
o
 
n
o
t
 
u
s
e
 
i
n
 
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
.
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
E
d
m
o
n
d
s
-
K
a
r
p
 
(
B
F
S
)
"
,
 
"
O
(
V
 
*
 
E
^
2
)
"
,
 
"
G
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
e
r
m
i
n
a
t
i
o
n
.
 
E
a
s
y
 
t
o
 
c
o
d
e
.
 
G
o
o
d
 
f
o
r
 
g
e
n
e
r
a
l
 
g
r
a
p
h
s
.
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
D
i
n
i
c
'
s
"
,
 
"
O
(
V
^
2
 
*
 
E
)
"
,
 
"
L
e
v
e
l
 
g
r
a
p
h
 
+
 
b
l
o
c
k
i
n
g
 
f
l
o
w
.
 
O
(
E
 
*
 
s
q
r
t
 
V
)
 
o
n
 
u
n
i
t
-
c
a
p
a
c
i
t
y
 
/
 
b
i
p
a
r
t
i
t
e
 
g
r
a
p
h
s
.
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
P
u
s
h
-
R
e
l
a
b
e
l
 
(
G
o
l
d
b
e
r
g
-
T
a
r
j
a
n
)
"
,
 
"
O
(
V
^
2
 
*
 
s
q
r
t
 
E
)
"
,
 
"
F
a
s
t
e
r
 
i
n
 
p
r
a
c
t
i
c
e
.
 
P
u
s
h
 
p
r
e
f
l
o
w
 
t
h
r
o
u
g
h
 
n
o
d
e
s
;
 
r
e
l
a
b
e
l
 
h
e
i
g
h
t
s
.
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
H
o
p
c
r
o
f
t
-
K
a
r
p
"
,
 
"
O
(
E
 
*
 
s
q
r
t
 
V
)
"
,
 
"
S
P
E
C
I
F
I
C
A
L
L
Y
 
f
o
r
 
b
i
p
a
r
t
i
t
e
 
m
a
t
c
h
i
n
g
.
 
B
e
a
t
s
 
D
i
n
i
c
'
s
 
g
e
n
e
r
a
l
 
b
o
u
n
d
 
o
n
 
t
h
i
s
 
c
a
s
e
.
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
r
,
 
i
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
4
 
p
y
-
2
 
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
r
[
0
]
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
4
 
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
r
[
1
]
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
4
 
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
"
>
{
r
[
2
]
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
M
i
n
-
c
u
t
 
f
r
o
m
 
s
a
t
u
r
a
t
e
d
 
e
d
g
e
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


 
 
 
 
 
 
 
 
 
 
A
f
t
e
r
 
m
a
x
-
f
l
o
w
 
f
i
n
i
s
h
e
s
,
 
d
o
 
o
n
e
 
m
o
r
e
 
B
F
S
 
f
r
o
m
 
t
h
e
 
s
o
u
r
c
e
 
i
n
 
t
h
e
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
.
 
L
e
t
 
S
 
=
 
v
e
r
t
i
c
e
s
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
s
o
u
r
c
e
.
 
T
h
e
n
 
T
 
=
 
V
 
m
i
n
u
s
 
S
 
(
a
n
d
 
t
 
i
s
 
i
n
 
T
)
.
 
T
h
e
 
m
i
n
 
c
u
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
 
t
h
e
 
s
e
t
 
o
f
 
o
r
i
g
i
n
a
l
 
e
d
g
e
s
 
(
u
,
 
v
)
 
w
i
t
h
 
u
 
i
n
 
S
 
a
n
d
 
v
 
i
n
 
T
,
 
a
n
d
 
t
h
e
y
 
a
r
e
 
A
L
L
 
s
a
t
u
r
a
t
e
d
 
i
n
 
t
h
e
 
f
i
n
a
l
 
f
l
o
w
.
 
T
h
i
s
 
g
i
v
e
s
 
y
o
u
 
b
o
t
h
 
t
h
e
 
m
a
x
-
f
l
o
w
 
v
a
l
u
e
 
A
N
D
 
t
h
e
 
w
i
t
n
e
s
s
i
n
g
 
m
i
n
 
c
u
t
 
f
o
r
 
f
r
e
e
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
R
e
a
l
 
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
 
s
p
a
c
e
-
y
-
1
.
5
 
p
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
1
0
0
"
>
B
i
p
a
r
t
i
t
e
 
m
a
t
c
h
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
 
a
s
s
i
g
n
 
w
o
r
k
e
r
s
 
t
o
 
j
o
b
s
,
 
s
t
u
d
e
n
t
s
 
t
o
 
s
c
h
o
o
l
s
,
 
o
r
g
a
n
s
 
t
o
 
p
a
t
i
e
n
t
s
 
(
R
o
t
h
'
s
 
2
0
1
2
 
N
o
b
e
l
 
w
o
r
k
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
1
0
0
"
>
I
m
a
g
e
 
s
e
g
m
e
n
t
a
t
i
o
n
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
 
f
o
r
e
g
r
o
u
n
d
/
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
 
s
e
p
a
r
a
t
i
o
n
 
a
s
 
m
i
n
-
c
u
t
 
o
n
 
a
 
p
i
x
e
l
 
g
r
i
d
 
(
B
o
y
k
o
v
-
K
o
l
m
o
g
o
r
o
v
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
1
0
0
"
>
N
e
t
w
o
r
k
 
r
e
l
i
a
b
i
l
i
t
y
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
 
m
a
x
-
f
l
o
w
 
e
q
u
a
l
s
 
h
o
w
 
m
u
c
h
 
t
r
a
f
f
i
c
 
c
a
n
 
s
u
r
v
i
v
e
 
b
e
t
w
e
e
n
 
t
w
o
 
r
o
u
t
e
r
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
1
0
0
"
>
P
r
o
j
e
c
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
 
w
h
i
c
h
 
p
r
o
j
e
c
t
s
 
t
o
 
f
u
n
d
 
t
o
 
m
a
x
i
m
i
z
e
 
p
r
o
f
i
t
 
(
m
a
x
-
f
l
o
w
 
o
n
 
a
 
b
i
p
a
r
t
i
t
e
 
p
r
o
j
e
c
t
/
r
e
s
o
u
r
c
e
 
g
r
a
p
h
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
1
0
0
"
>
S
p
o
r
t
s
 
e
l
i
m
i
n
a
t
i
o
n
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
 
c
a
n
 
t
e
a
m
 
X
 
s
t
i
l
l
 
w
i
n
 
t
h
e
 
l
e
a
g
u
e
?
 
R
e
d
u
c
e
s
 
t
o
 
m
a
x
-
f
l
o
w
 
o
n
 
a
 
r
e
m
a
i
n
i
n
g
-
g
a
m
e
s
 
n
e
t
w
o
r
k
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
t
d
l
i
b
,
 
a
l
m
o
s
t
 
n
o
 
l
a
n
g
u
a
g
e
 
h
a
s
 
i
t
 
b
u
i
l
t
 
i
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


 
 
 
 
 
 
 
 
 
 
M
a
x
-
f
l
o
w
 
i
s
 
r
a
r
e
 
i
n
 
s
t
d
l
i
b
s
 
b
e
c
a
u
s
e
 
t
h
e
 
r
i
g
h
t
 
c
h
o
i
c
e
 
d
e
p
e
n
d
s
 
o
n
 
t
h
e
 
g
r
a
p
h
.
 
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
1
0
0
"
>
N
e
t
w
o
r
k
X
<
/
s
t
r
o
n
g
>
 
h
a
s
 
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
n
x
.
m
a
x
i
m
u
m
_
f
l
o
w
(
G
,
 
s
,
 
t
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
 
(
d
e
f
a
u
l
t
 
=
 
p
r
e
f
l
o
w
-
p
u
s
h
)
 
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
n
x
.
m
i
n
i
m
u
m
_
c
u
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
.
 
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
1
0
0
"
>
S
c
i
P
y
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
c
i
p
y
.
s
p
a
r
s
e
.
c
s
g
r
a
p
h
.
m
a
x
i
m
u
m
_
f
l
o
w
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
1
0
0
"
>
B
o
o
s
t
 
G
r
a
p
h
 
L
i
b
r
a
r
y
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
 
f
u
l
l
 
m
e
n
u
 
(
E
d
m
o
n
d
s
-
K
a
r
p
,
 
p
u
s
h
-
r
e
l
a
b
e
l
,
 
b
o
y
k
o
v
-
k
o
l
m
o
g
o
r
o
v
)
.
 
F
o
r
 
c
o
m
p
e
t
i
t
i
v
e
 
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
,
 
a
l
w
a
y
s
 
c
a
r
r
y
 
a
 
D
i
n
i
c
'
s
 
t
e
m
p
l
a
t
e
,
 
E
d
m
o
n
d
s
-
K
a
r
p
 
i
s
 
e
a
s
i
e
r
 
t
o
 
d
e
b
u
g
 
b
u
t
 
D
i
n
i
c
'
s
 
i
s
 
f
a
s
t
e
r
 
o
n
 
d
e
n
s
e
 
u
n
i
t
-
c
a
p
a
c
i
t
y
 
g
r
a
p
h
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
M
a
x
F
l
o
w
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
W
h
y
 
d
o
e
s
 
F
o
r
d
-
F
u
l
k
e
r
s
o
n
 
m
a
i
n
t
a
i
n
 
r
e
v
e
r
s
e
 
e
d
g
e
s
 
i
n
 
t
h
e
 
r
e
s
i
d
u
a
l
 
g
r
a
p
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
T
o
 
s
a
v
e
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
d
 
b
y
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
 
s
t
o
r
a
g
e
"
,


 
 
 
 
 
 
 
 
"
S
o
 
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
 
c
a
n
 
c
a
n
c
e
l
 
a
 
p
r
e
v
i
o
u
s
 
a
u
g
m
e
n
t
a
t
i
o
n
 
i
f
 
a
 
l
a
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
 
n
e
e
d
s
 
t
o
 
r
e
r
o
u
t
e
 
f
l
o
w
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
m
a
k
e
 
t
h
e
 
B
F
S
 
f
a
s
t
e
r
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
R
e
v
e
r
s
e
 
r
e
s
i
d
u
a
l
s
 
e
n
c
o
d
e
 
t
h
e
 
o
p
t
i
o
n
 
t
o
 
u
n
d
o
.
 
W
i
t
h
o
u
t
 
t
h
e
m
,
 
a
 
g
r
e
e
d
y
 
e
a
r
l
y
 
a
u
g
m
e
n
t
a
t
i
o
n
 
c
o
u
l
d
 
p
r
e
v
e
n
t
 
r
e
a
c
h
i
n
g
 
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
 
m
a
x
-
f
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
T
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
 
E
d
m
o
n
d
s
-
K
a
r
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
O
(
V
 
+
 
E
)
"
,
 
"
O
(
V
 
*
 
E
)
"
,
 
"
O
(
V
 
*
 
E
^
2
)
"
,
 
"
O
(
V
^
2
 
*
 
E
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
E
a
c
h
 
B
F
S
 
i
s
 
O
(
E
)
.
 
T
h
e
 
n
u
m
b
e
r
 
o
f
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
s
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
O
(
V
*
E
)
 
t
h
a
n
k
s
 
t
o
 
t
h
e
 
B
F
S
 
s
h
o
r
t
e
s
t
-
p
a
t
h
 
a
r
g
u
m
e
n
t
.
 
T
o
t
a
l
:
 
O
(
V
 
*
 
E
^
2
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
T
h
e
 
M
a
x
-
F
l
o
w
 
M
i
n
-
C
u
t
 
t
h
e
o
r
e
m
 
s
a
y
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
M
a
x
 
f
l
o
w
 
=
 
m
i
n
 
c
u
t
 
v
a
l
u
e
"
,


 
 
 
 
 
 
 
 
"
M
a
x
 
f
l
o
w
 
>
=
 
m
i
n
 
c
u
t
 
v
a
l
u
e
"
,


 
 
 
 
 
 
 
 
"
M
a
x
 
f
l
o
w
 
<
=
 
m
i
n
 
c
u
t
 
v
a
l
u
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
a
r
e
 
u
n
r
e
l
a
t
e
d
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
S
t
r
o
n
g
 
d
u
a
l
i
t
y
:
 
m
a
x
-
f
l
o
w
 
v
a
l
u
e
 
e
q
u
a
l
s
 
m
i
n
-
c
u
t
 
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
h
e
 
p
r
o
o
f
 
u
s
e
s
 
t
h
e
 
r
e
s
i
d
u
a
l
-
g
r
a
p
h
 
r
e
a
c
h
a
b
i
l
i
t
y
 
a
f
t
e
r
 
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
 
t
e
r
m
i
n
a
t
e
s
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
i
p
a
r
t
i
t
e
 
m
a
t
c
h
i
n
g
 
c
a
n
 
b
e
 
s
o
l
v
e
d
 
a
s
 
m
a
x
-
f
l
o
w
 
b
y
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
R
e
p
l
a
c
i
n
g
 
e
v
e
r
y
 
e
d
g
e
 
w
e
i
g
h
t
 
w
i
t
h
 
i
n
f
i
n
i
t
y
"
,


 
 
 
 
 
 
 
 
"
A
d
d
i
n
g
 
a
 
s
o
u
r
c
e
 
S
 
c
o
n
n
e
c
t
e
d
 
t
o
 
l
e
f
t
 
v
e
r
t
i
c
e
s
 
(
c
a
p
 
1
)
,
 
a
n
d
 
r
i
g
h
t
 
v
e
r
t
i
c
e
s
 
t
o
 
a
 
s
i
n
k
 
T
 
(
c
a
p
 
1
)
;
 
o
r
i
g
i
n
a
l
 
e
d
g
e
s
 
h
a
v
e
 
c
a
p
 
1
"
,


 
 
 
 
 
 
 
 
"
C
o
m
p
u
t
i
n
g
 
t
h
e
 
s
p
a
n
n
i
n
g
 
t
r
e
e
"
,


 
 
 
 
 
 
 
 
"
R
u
n
n
i
n
g
 
D
i
j
k
s
t
r
a
 
f
r
o
m
 
e
a
c
h
 
l
e
f
t
 
v
e
r
t
e
x
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
M
a
x
 
i
n
t
e
g
r
a
l
 
f
l
o
w
 
o
n
 
t
h
i
s
 
c
o
n
s
t
r
u
c
t
i
o
n
 
e
q
u
a
l
s
 
m
a
x
i
m
u
m
 
m
a
t
c
h
i
n
g
 
s
i
z
e
.
 
E
a
c
h
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
 
c
o
r
r
e
s
p
o
n
d
s
 
t
o
 
a
n
 
a
l
t
e
r
n
a
t
i
n
g
 
p
a
t
h
 
i
n
 
m
a
t
c
h
i
n
g
 
t
h
e
o
r
y
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
f
t
e
r
 
m
a
x
-
f
l
o
w
 
t
e
r
m
i
n
a
t
e
s
,
 
t
h
e
 
m
i
n
 
c
u
t
 
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
T
h
e
 
s
e
t
 
o
f
 
v
e
r
t
i
c
e
s
 
i
n
 
t
h
e
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
s
"
,


 
 
 
 
 
 
 
 
"
E
d
g
e
s
 
(
u
,
v
)
 
w
h
e
r
e
 
u
 
i
s
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
s
o
u
r
c
e
 
i
n
 
t
h
e
 
f
i
n
a
l
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
 
a
n
d
 
v
 
i
s
 
n
o
t
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
f
i
r
s
t
 
e
d
g
e
 
o
f
 
t
h
e
 
l
o
n
g
e
s
t
 
a
u
g
m
e
n
t
i
n
g
 
p
a
t
h
"
,


 
 
 
 
 
 
 
 
"
C
a
n
n
o
t
 
b
e
 
c
o
m
p
u
t
e
d
 
i
n
 
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
 
t
i
m
e
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
R
u
n
 
B
F
S
 
f
r
o
m
 
s
o
u
r
c
e
 
i
n
 
t
h
e
 
F
I
N
A
L
 
r
e
s
i
d
u
a
l
 
g
r
a
p
h
.
 
R
e
a
c
h
a
b
l
e
 
v
e
r
t
i
c
e
s
 
=
 
S
,
 
t
h
e
 
r
e
s
t
 
=
 
T
.
 
T
h
e
 
m
i
n
 
c
u
t
 
=
 
e
d
g
e
s
 
c
r
o
s
s
i
n
g
 
S
 
t
o
 
T
 
i
n
 
t
h
e
 
o
r
i
g
i
n
a
l
 
g
r
a
p
h
 
(
a
l
l
 
s
a
t
u
r
a
t
e
d
)
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
M
a
x
i
m
u
m
 
F
l
o
w
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
1
0
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
H
i
g
h
,
 
b
i
p
a
r
t
i
t
e
 
m
a
t
c
h
i
n
g
,
 
i
m
a
g
e
 
s
e
g
m
e
n
t
a
t
i
o
n
,
 
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
 
s
y
s
t
e
m
 
d
e
s
i
g
n
.
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
M
o
n
o
t
o
n
i
c
 
S
t
a
c
k
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


