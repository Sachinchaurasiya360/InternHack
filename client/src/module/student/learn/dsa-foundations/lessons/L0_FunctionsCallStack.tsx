
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


 
 
C
o
d
e
B
l
o
c
k
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
 
S
t
a
c
k
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


 
 
/
*
*
 
S
t
a
c
k
 
f
r
a
m
e
s
 
v
i
s
i
b
l
e
 
a
t
 
t
h
i
s
 
s
t
e
p
,
 
b
o
t
t
o
m
 
t
o
 
t
o
p
.
 
*
/


 
 
s
t
a
c
k
:
 
A
r
r
a
y
<
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
 
n
:
 
n
u
m
b
e
r
;
 
r
e
t
u
r
n
V
a
l
?
:
 
n
u
m
b
e
r
 
}
>
;


 
 
p
h
a
s
e
:
 
"
p
u
s
h
"
 
|
 
"
r
u
n
"
 
|
 
"
p
o
p
"
 
|
 
"
d
o
n
e
"
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
 
 
B
u
i
l
d
 
f
a
c
t
o
r
i
a
l
(
3
)
 
f
r
a
m
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
a
c
t
o
r
i
a
l
(
)
:
 
S
t
a
c
k
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
:
 
S
t
a
c
k
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




 
 
/
/
 
S
t
e
p
 
0
:
 
i
n
i
t
i
a
l
 
c
a
l
l


 
 
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
:
 
3
 
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
W
e
 
c
a
l
l
 
f
a
c
t
o
r
i
a
l
(
3
)
.
 
A
 
n
e
w
 
f
r
a
m
e
 
i
s
 
p
u
s
h
e
d
 
o
n
t
o
 
t
h
e
 
s
t
a
c
k
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
}
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
u
s
h
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
3
)
 
c
h
e
c
k
s
 
b
a
s
e
 
c
a
s
e


 
 
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
 
1
,


 
 
 
 
v
a
r
s
:
 
{
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
3
)
:
 
I
s
 
n
 
=
=
 
0
?
 
N
o
 
(
n
=
3
)
.
 
W
e
 
m
u
s
t
 
r
e
c
u
r
s
e
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
}
]
,


 
 
 
 
p
h
a
s
e
:
 
"
r
u
n
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
3
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
2
)


 
 
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
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
3
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
2
)
.
 
A
 
n
e
w
 
f
r
a
m
e
 
i
s
 
p
u
s
h
e
d
 
o
n
 
t
o
p
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
}
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
u
s
h
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
2
)
 
c
h
e
c
k
s
 
b
a
s
e
 
c
a
s
e


 
 
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
 
1
,


 
 
 
 
v
a
r
s
:
 
{
 
n
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
2
)
:
 
I
s
 
n
 
=
=
 
0
?
 
N
o
 
(
n
=
2
)
.
 
R
e
c
u
r
s
e
 
a
g
a
i
n
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
}
]
,


 
 
 
 
p
h
a
s
e
:
 
"
r
u
n
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
2
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
1
)


 
 
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
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
2
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
1
)
.
 
S
t
a
c
k
 
g
r
o
w
s
 
d
e
e
p
e
r
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
1
)
"
,
 
n
:
 
1
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
u
s
h
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
1
)
 
c
h
e
c
k
s
 
b
a
s
e
 
c
a
s
e


 
 
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
 
1
,


 
 
 
 
v
a
r
s
:
 
{
 
n
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
f
a
c
t
o
r
i
a
l
(
1
)
:
 
I
s
 
n
 
=
=
 
0
?
 
N
o
 
(
n
=
1
)
.
 
R
e
c
u
r
s
e
 
o
n
c
e
 
m
o
r
e
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
1
)
"
,
 
n
:
 
1
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
r
u
n
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
1
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
0
)


 
 
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
f
a
c
t
o
r
i
a
l
(
1
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
0
)
.
 
S
t
a
c
k
 
i
s
 
n
o
w
 
4
 
f
r
a
m
e
s
 
d
e
e
p
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
1
)
"
,
 
n
:
 
1
 
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
f
a
c
t
o
r
i
a
l
(
0
)
"
,
 
n
:
 
0
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
u
s
h
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
0
)
 
h
i
t
s
 
b
a
s
e
 
c
a
s
e


 
 
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
 
1
,


 
 
 
 
v
a
r
s
:
 
{
 
n
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
f
a
c
t
o
r
i
a
l
(
0
)
:
 
I
s
 
n
 
=
=
 
0
?
 
Y
E
S
,
 
t
h
i
s
 
i
s
 
t
h
e
 
b
a
s
e
 
c
a
s
e
.
 
R
e
t
u
r
n
 
1
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
1
)
"
,
 
n
:
 
1
 
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
f
a
c
t
o
r
i
a
l
(
0
)
"
,
 
n
:
 
0
,
 
r
e
t
u
r
n
V
a
l
:
 
1
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
r
u
n
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
0
)
 
r
e
t
u
r
n
s
,
 
f
r
a
m
e
 
p
o
p
p
e
d


 
 
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
f
a
c
t
o
r
i
a
l
(
0
)
 
r
e
t
u
r
n
s
 
1
.
 
I
t
s
 
f
r
a
m
e
 
i
s
 
p
o
p
p
e
d
 
o
f
f
 
t
h
e
 
s
t
a
c
k
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
1
)
"
,
 
n
:
 
1
,
 
r
e
t
u
r
n
V
a
l
:
 
1
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
o
p
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
1
)
 
c
o
m
p
u
t
e
s
 
1
 
*
 
1
 
a
n
d
 
r
e
t
u
r
n
s


 
 
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
f
a
c
t
o
r
i
a
l
(
1
)
 
=
 
1
 
×
 
f
a
c
t
o
r
i
a
l
(
0
)
 
=
 
1
 
×
 
1
 
=
 
1
.
 
R
e
t
u
r
n
s
 
1
.
 
F
r
a
m
e
 
p
o
p
p
e
d
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
2
)
"
,
 
n
:
 
2
,
 
r
e
t
u
r
n
V
a
l
:
 
2
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
o
p
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
2
)
 
c
o
m
p
u
t
e
s
 
2
 
*
 
1
 
a
n
d
 
r
e
t
u
r
n
s


 
 
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
:
 
2
 
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
f
a
c
t
o
r
i
a
l
(
2
)
 
=
 
2
 
×
 
f
a
c
t
o
r
i
a
l
(
1
)
 
=
 
2
 
×
 
1
 
=
 
2
.
 
R
e
t
u
r
n
s
 
2
.
 
F
r
a
m
e
 
p
o
p
p
e
d
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
a
c
t
o
r
i
a
l
(
3
)
"
,
 
n
:
 
3
,
 
r
e
t
u
r
n
V
a
l
:
 
6
 
}
,


 
 
 
 
]
,


 
 
 
 
p
h
a
s
e
:
 
"
p
o
p
"
,


 
 
}
)
;




 
 
/
/
 
f
a
c
t
o
r
i
a
l
(
3
)
 
c
o
m
p
u
t
e
s
 
3
 
*
 
2
 
a
n
d
 
r
e
t
u
r
n
s


 
 
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
:
 
3
 
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
f
a
c
t
o
r
i
a
l
(
3
)
 
=
 
3
 
×
 
f
a
c
t
o
r
i
a
l
(
2
)
 
=
 
3
 
×
 
2
 
=
 
6
.
 
R
e
t
u
r
n
s
 
6
.
 
S
t
a
c
k
 
i
s
 
e
m
p
t
y
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[
]
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


 
 
}
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
 
4
,


 
 
 
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
6
 
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
D
o
n
e
!
 
f
a
c
t
o
r
i
a
l
(
3
)
 
=
 
6
.
 
T
h
e
 
s
t
a
c
k
 
i
s
 
c
l
e
a
r
 
a
n
d
 
w
e
 
h
a
v
e
 
o
u
r
 
a
n
s
w
e
r
.
"
,


 
 
 
 
s
t
a
c
k
:
 
[
]
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
 
 
S
t
a
c
k
 
v
i
s
u
a
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
 
S
t
a
c
k
V
i
s
u
a
l
(
{
 
s
t
a
c
k
,
 
p
h
a
s
e
 
}
:
 
{
 
s
t
a
c
k
:
 
S
t
a
c
k
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
c
k
"
]
;
 
p
h
a
s
e
:
 
S
t
a
c
k
F
r
a
m
e
[
"
p
h
a
s
e
"
]
 
}
)
 
{


 
 
i
f
 
(
s
t
a
c
k
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
 
h
-
4
4
 
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
d
a
s
h
e
d
 
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
 
f
o
n
t
-
m
o
n
o
 
i
t
a
l
i
c
"
>
s
t
a
c
k
 
i
s
 
e
m
p
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


 
 
 
 
)
;


 
 
}


 
 
/
/
 
R
e
n
d
e
r
 
t
o
p
-
o
f
-
s
t
a
c
k
 
a
t
 
t
h
e
 
v
i
s
u
a
l
 
t
o
p


 
 
c
o
n
s
t
 
v
i
s
i
b
l
e
 
=
 
[
.
.
.
s
t
a
c
k
]
.
r
e
v
e
r
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
 
c
l
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


 
 
 
 
 
 
 
 
/
 
c
a
l
l
 
s
t
a
c
k
 
(
t
o
p
 
=
 
m
o
s
t
 
r
e
c
e
n
t
)


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
v
i
s
i
b
l
e
.
m
a
p
(
(
f
r
a
m
e
,
 
i
d
x
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
T
o
p
 
=
 
i
d
x
 
=
=
=
 
0
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
N
e
w
 
=
 
i
s
T
o
p
 
&
&
 
p
h
a
s
e
 
=
=
=
 
"
p
u
s
h
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
R
e
t
u
r
n
i
n
g
 
=
 
i
s
T
o
p
 
&
&
 
(
p
h
a
s
e
 
=
=
=
 
"
p
o
p
"
 
|
|
 
f
r
a
m
e
.
r
e
t
u
r
n
V
a
l
 
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
`
$
{
f
r
a
m
e
.
l
a
b
e
l
}
-
$
{
i
d
x
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
p
x
-
3
 
p
y
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
 
i
s
N
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
i
s
R
e
t
u
r
n
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
i
s
T
o
p
 
?
 
"
#
f
a
f
a
f
9
"
 
:
 
"
#
f
f
f
f
f
f
"
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
"
>
{
f
r
a
m
e
.
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


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
r
e
t
u
r
n
V
a
l
 
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
m
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
→
 
{
f
r
a
m
e
.
r
e
t
u
r
n
V
a
l
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
 
p
t
-
1
 
m
t
-
1
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
b
o
t
t
o
m
 
o
f
 
s
t
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




c
o
n
s
t
 
F
A
C
T
O
R
I
A
L
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
f
u
n
c
t
i
o
n
 
f
a
c
t
o
r
i
a
l
(
n
)
:
"
,


 
 
"
 
 
i
f
 
n
 
=
=
 
0
:
 
r
e
t
u
r
n
 
1
"
,


 
 
"
 
 
r
e
t
u
r
n
 
n
 
*
 
f
a
c
t
o
r
i
a
l
(
n
 
-
 
1
)
"
,


 
 
"
#
 
(
f
r
a
m
e
 
p
o
p
p
e
d
,
 
v
a
l
u
e
 
r
e
t
u
r
n
e
d
)
"
,


 
 
"
#
 
r
e
s
u
l
t
 
r
e
a
d
y
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
a
c
t
o
r
i
a
l
(
)
,
 
[
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
,
 
9
0
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
C
a
l
l
 
S
t
a
c
k
,
 
f
a
c
t
o
r
i
a
l
(
3
)
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
F
A
C
T
O
R
I
A
L
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
n
"
,
 
"
r
e
s
u
l
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
4
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
 
w
a
t
c
h
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
 
g
r
o
w
 
a
n
d
 
s
h
r
i
n
k
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
S
t
a
c
k
V
i
s
u
a
l
 
s
t
a
c
k
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
c
k
 
?
?
 
[
]
}
 
p
h
a
s
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
p
h
a
s
e
 
?
?
 
"
r
u
n
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
f
u
n
c
t
i
o
n
s
 
&
 
t
h
e
 
c
a
l
l
 
s
t
a
c
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
 
n
a
m
e
d
 
r
e
c
i
p
e
 
y
o
u
 
c
a
n
 
c
a
l
l
 
a
n
y
t
i
m
e
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


 
 
 
 
 
 
 
 
 
 
A
 
f
u
n
c
t
i
o
n
 
i
s
 
l
i
k
e
 
a
 
n
a
m
e
d
 
r
e
c
i
p
e
.
 
Y
o
u
 
w
r
i
t
e
 
t
h
e
 
r
e
c
i
p
e
 
o
n
c
e
,
 
i
t
s
 
n
a
m
e
,
 
w
h
a
t


 
 
 
 
 
 
 
 
 
 
i
n
g
r
e
d
i
e
n
t
s
 
i
t
 
n
e
e
d
s
 
(
p
a
r
a
m
e
t
e
r
s
)
,
 
a
n
d
 
w
h
a
t
 
d
i
s
h
 
i
t
 
p
r
o
d
u
c
e
s
 
(
r
e
t
u
r
n
 
v
a
l
u
e
)
.
 
T
h
e
n
 
y
o
u


 
 
 
 
 
 
 
 
 
 
c
a
n
 
u
s
e
 
i
t
 
a
n
y
w
h
e
r
e
 
j
u
s
t
 
b
y
 
c
a
l
l
i
n
g
 
i
t
s
 
n
a
m
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
 
a
n
a
t
o
m
y
 
o
f
 
a
 
f
u
n
c
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
f
u
n
c
t
i
o
n
 
h
a
s
 
t
h
r
e
e
 
p
a
r
t
s
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
o
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
e
c
i
m
a
l
 
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
 
m
b
-
3
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
N
a
m
e
<
/
s
t
r
o
n
g
>
,
 
h
o
w
 
y
o
u
 
r
e
f
e
r
 
t
o
 
i
t
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
P
a
r
a
m
e
t
e
r
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
 
(
p
a
r
-
A
M
-
e
t
-
e
r
z
)
,
 
t
h
e
 
i
n
p
u
t
s
 
y
o
u
 
h
a
n
d
 
i
n
.
 
L
i
k
e
 
"
n
u
m
b
e
r
 
o
f
 
s
e
r
v
i
n
g
s
"
 
i
n
 
a
 
r
e
c
i
p
e
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
R
e
t
u
r
n
 
v
a
l
u
e
<
/
s
t
r
o
n
g
>
,
 
t
h
e
 
o
u
t
p
u
t
 
y
o
u
 
g
e
t
 
b
a
c
k
.
 
L
i
k
e
 
t
h
e
 
f
i
n
i
s
h
e
d
 
d
i
s
h
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
l
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>
{
"
f
u
n
c
t
i
o
n
 
a
d
d
(
a
,
 
b
)
:
\
n
 
 
r
e
t
u
r
n
 
a
 
+
 
b
\
n
\
n
r
e
s
u
l
t
 
=
 
a
d
d
(
3
,
 
4
)
 
 
#
 
r
e
s
u
l
t
 
i
s
 
7
"
}
<
/
C
o
d
e
B
l
o
c
k
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
W
h
a
t
 
h
a
p
p
e
n
s
 
w
h
e
n
 
y
o
u
 
c
a
l
l
 
a
 
f
u
n
c
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
C
a
l
l
i
n
g
 
a
 
f
u
n
c
t
i
o
n
 
i
s
 
a
 
f
o
u
r
-
s
t
e
p
 
p
r
o
c
e
s
s
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
o
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
e
c
i
m
a
l
 
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
a
u
s
e
<
/
s
t
r
o
n
g
>
 
w
h
e
r
e
 
y
o
u
 
a
r
e
 
i
n
 
t
h
e
 
c
a
l
l
e
r
'
s
 
c
o
d
e
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
u
m
p
<
/
s
t
r
o
n
g
>
 
i
n
t
o
 
t
h
e
 
f
u
n
c
t
i
o
n
,
 
b
r
i
n
g
i
n
g
 
t
h
e
 
g
i
v
e
n
 
i
n
p
u
t
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
5
0
"
>
R
u
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
 
t
h
e
 
f
u
n
c
t
i
o
n
 
b
o
d
y
 
u
n
t
i
l
 
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
r
e
t
u
r
n
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
 
h
i
t
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
R
e
s
u
m
e
<
/
s
t
r
o
n
g
>
 
w
h
e
r
e
 
y
o
u
 
p
a
u
s
e
d
,
 
n
o
w
 
h
o
l
d
i
n
g
 
t
h
e
 
r
e
t
u
r
n
 
v
a
l
u
e
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
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
T
h
e
 
c
a
l
l
 
s
t
a
c
k
:
 
m
e
m
o
r
y
 
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
e
 
c
a
l
l
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
t
i
m
e
 
a
 
f
u
n
c
t
i
o
n
 
i
s
 
c
a
l
l
e
d
,
 
t
h
e
 
c
o
m
p
u
t
e
r
 
c
r
e
a
t
e
s
 
a
 
c
h
u
n
k
 
o
f
 
m
e
m
o
r
y
 
c
a
l
l
e
d
 
a


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
 
f
r
a
m
e
 
(
a
l
s
o
 
c
a
l
l
e
d
 
a
n
 
a
c
t
i
v
a
t
i
o
n
 
r
e
c
o
r
d
)
.
 
T
h
i
s
 
f
r
a
m
e
 
s
t
o
r
e
s
:


 
 
 
 
 
 
 
 
<
/
p
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
T
h
e
 
f
u
n
c
t
i
o
n
'
s
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
(
v
a
r
i
a
b
l
e
s
 
o
n
l
y
 
t
h
a
t
 
c
a
l
l
 
c
a
n
 
s
e
e
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
T
h
e
 
v
a
l
u
e
s
 
o
f
 
t
h
e
 
p
a
r
a
m
e
t
e
r
s
 
p
a
s
s
e
d
 
i
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
W
h
e
r
e
 
t
o
 
r
e
t
u
r
n
 
t
o
 
w
h
e
n
 
t
h
e
 
f
u
n
c
t
i
o
n
 
f
i
n
i
s
h
e
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
s
e
 
f
r
a
m
e
s
 
a
r
e
 
s
t
a
c
k
e
d
 
o
n
 
t
o
p
 
o
f
 
e
a
c
h
 
o
t
h
e
r
,
 
t
h
e
 
m
o
s
t
 
r
e
c
e
n
t
 
c
a
l
l
 
s
i
t
s
 
o
n
 
t
o
p
.
 
W
h
e
n


 
 
 
 
 
 
 
 
 
 
a
 
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
t
u
r
n
s
,
 
i
t
s
 
f
r
a
m
e
 
i
s
 
t
h
r
o
w
n
 
a
w
a
y
 
(
p
o
p
p
e
d
)
.
 
T
h
e
 
f
r
a
m
e
 
b
e
l
o
w
 
i
t
 
r
e
s
u
m
e
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
h
i
s
 
s
t
r
u
c
t
u
r
e
 
i
s
 
c
a
l
l
e
d
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
.
 
"
S
t
a
c
k
"
 
b
e
c
a
u
s
e
 
i
t
 
w
o
r
k
s
 
l
i
k
e
 
a
 
s
t
a
c
k
 
o
f


 
 
 
 
 
 
 
 
 
 
p
l
a
t
e
s
:
 
y
o
u
 
a
l
w
a
y
s
 
a
d
d
 
a
n
d
 
r
e
m
o
v
e
 
f
r
o
m
 
t
h
e
 
t
o
p
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
L
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
d
i
e
 
w
i
t
h
 
t
h
e
 
f
r
a
m
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
V
a
r
i
a
b
l
e
s
 
d
e
c
l
a
r
e
d
 
i
n
s
i
d
e
 
a
 
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
e
 
l
o
c
a
l
,
 
t
h
e
y
 
o
n
l
y
 
e
x
i
s
t
 
d
u
r
i
n
g
 
t
h
a
t


 
 
 
 
 
 
 
 
 
 
f
u
n
c
t
i
o
n
'
s
 
f
r
a
m
e
.
 
O
n
c
e
 
t
h
e
 
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
t
u
r
n
s
 
a
n
d
 
t
h
e
 
f
r
a
m
e
 
i
s
 
g
o
n
e
,
 
t
h
o
s
e
 
v
a
r
i
a
b
l
e
s


 
 
 
 
 
 
 
 
 
 
a
r
e
 
g
o
n
e
 
t
o
o
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>
{
"
f
u
n
c
t
i
o
n
 
d
o
u
b
l
e
(
x
)
:
\
n
 
 
r
e
s
u
l
t
 
=
 
x
 
*
 
2
 
 
 
#
 
'
r
e
s
u
l
t
'
 
i
s
 
l
o
c
a
l
 
t
o
 
d
o
u
b
l
e
\
n
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
\
n
\
n
y
 
=
 
d
o
u
b
l
e
(
5
)
\
n
#
 
'
r
e
s
u
l
t
'
 
f
r
o
m
 
d
o
u
b
l
e
(
)
 
i
s
 
g
o
n
e
 
n
o
w
,
 
o
n
l
y
 
y
 
e
x
i
s
t
s
"
}
<
/
C
o
d
e
B
l
o
c
k
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
i
s
 
c
a
l
l
e
d
 
s
c
o
p
e
.
 
L
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
d
o
 
n
o
t
 
l
e
a
k
 
b
e
t
w
e
e
n
 
c
a
l
l
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


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
H
o
w
 
m
a
n
y
 
s
t
a
c
k
 
f
r
a
m
e
s
 
a
r
e
 
o
n
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
 
a
t
 
t
h
e
 
d
e
e
p
e
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
n
 
c
a
l
l
i
n
g
 
f
a
c
t
o
r
i
a
l
(
3
)
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
u
n
c
t
i
o
n
 
f
a
c
t
o
r
i
a
l
(
n
)
:
\
n
 
 
i
f
 
n
 
=
=
 
0
:
 
r
e
t
u
r
n
 
1
\
n
 
 
r
e
t
u
r
n
 
n
 
*
 
f
a
c
t
o
r
i
a
l
(
n
 
-
 
1
)
\
n
\
n
f
a
c
t
o
r
i
a
l
(
3
)
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
 
f
r
a
m
e
s
"
,
 
"
3
 
f
r
a
m
e
s
"
,
 
"
4
 
f
r
a
m
e
s
"
,
 
"
1
 
f
r
a
m
e
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
T
h
e
 
d
e
e
p
e
s
t
 
p
o
i
n
t
 
i
s
 
w
h
e
n
 
f
a
c
t
o
r
i
a
l
(
0
)
 
i
s
 
c
a
l
l
e
d
.
 
A
c
t
i
v
e
 
f
r
a
m
e
s
 
a
t
 
t
h
a
t
 
p
o
i
n
t
:
 
f
a
c
t
o
r
i
a
l
(
3
)
,
 
f
a
c
t
o
r
i
a
l
(
2
)
,
 
f
a
c
t
o
r
i
a
l
(
1
)
,
 
f
a
c
t
o
r
i
a
l
(
0
)
,
 
t
h
a
t
 
i
s
 
4
 
f
r
a
m
e
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
W
h
a
t
 
v
a
l
u
e
 
d
o
e
s
 
t
h
i
s
 
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
t
u
r
n
 
w
h
e
n
 
c
a
l
l
e
d
 
a
s
 
g
r
e
e
t
(
5
)
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
u
n
c
t
i
o
n
 
g
r
e
e
t
(
n
)
:
\
n
 
 
i
f
 
n
 
=
=
 
0
:
 
r
e
t
u
r
n
 
0
\
n
 
 
r
e
t
u
r
n
 
1
 
+
 
g
r
e
e
t
(
n
 
-
 
1
)
\
n
\
n
g
r
e
e
t
(
5
)
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
0
"
,
 
"
4
"
,
 
"
5
"
,
 
"
6
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
E
a
c
h
 
c
a
l
l
 
a
d
d
s
 
1
 
t
o
 
t
h
e
 
r
e
s
u
l
t
 
o
f
 
g
r
e
e
t
(
n
-
1
)
.
 
g
r
e
e
t
(
0
)
 
=
 
0
,
 
s
o
 
g
r
e
e
t
(
5
)
 
=
 
1
+
1
+
1
+
1
+
1
+
0
 
=
 
5
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
W
h
a
t
 
i
s
 
t
h
e
 
b
a
s
e
 
c
a
s
e
 
i
n
 
t
h
i
s
 
r
e
c
u
r
s
i
v
e
 
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


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
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
u
m
(
n
)
:
\
n
 
 
i
f
 
n
 
=
=
 
1
:
 
r
e
t
u
r
n
 
1
\
n
 
 
r
e
t
u
r
n
 
n
 
+
 
s
u
m
(
n
 
-
 
1
)
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
r
e
t
u
r
n
 
n
 
+
 
s
u
m
(
n
 
-
 
1
)
"
,


 
 
 
 
 
 
 
 
"
n
 
=
=
 
1
:
 
r
e
t
u
r
n
 
1
"
,


 
 
 
 
 
 
 
 
"
s
u
m
(
n
 
-
 
1
)
"
,


 
 
 
 
 
 
 
 
"
T
h
e
r
e
 
i
s
 
n
o
 
b
a
s
e
 
c
a
s
e
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
T
h
e
 
b
a
s
e
 
c
a
s
e
 
i
s
 
t
h
e
 
c
o
n
d
i
t
i
o
n
 
t
h
a
t
 
s
t
o
p
s
 
t
h
e
 
r
e
c
u
r
s
i
o
n
.
 
H
e
r
e
 
i
t
 
i
s
 
n
 
=
=
 
1
,
 
w
h
i
c
h
 
r
e
t
u
r
n
s
 
1
 
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
 
a
n
o
t
h
e
r
 
r
e
c
u
r
s
i
v
e
 
c
a
l
l
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
A
 
f
u
n
c
t
i
o
n
 
c
a
l
l
s
 
i
t
s
e
l
f
 
w
i
t
h
o
u
t
 
a
 
b
a
s
e
 
c
a
s
e
.
 
W
h
a
t
 
h
a
p
p
e
n
s
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
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
e
v
e
r
(
n
)
:
\
n
 
 
r
e
t
u
r
n
 
f
o
r
e
v
e
r
(
n
 
-
 
1
)
\
n
\
n
f
o
r
e
v
e
r
(
5
)
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
t
u
r
n
s
 
0
 
e
v
e
n
t
u
a
l
l
y
"
,


 
 
 
 
 
 
 
 
"
R
e
t
u
r
n
s
 
-
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
C
r
a
s
h
e
s
 
w
i
t
h
 
a
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
 
e
r
r
o
r
"
,


 
 
 
 
 
 
 
 
"
R
u
n
s
 
5
 
t
i
m
e
s
 
a
n
d
 
s
t
o
p
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
W
i
t
h
o
u
t
 
a
 
b
a
s
e
 
c
a
s
e
,
 
t
h
e
 
s
t
a
c
k
 
g
r
o
w
s
 
f
o
r
e
v
e
r
.
 
T
h
e
 
c
o
m
p
u
t
e
r
 
r
u
n
s
 
o
u
t
 
o
f
 
s
t
a
c
k
 
m
e
m
o
r
y
 
a
n
d
 
c
r
a
s
h
e
s
 
w
i
t
h
 
a
 
S
t
a
c
k
O
v
e
r
f
l
o
w
E
r
r
o
r
 
(
o
r
 
s
i
m
i
l
a
r
)
.
"
,


 
 
 
 
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
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
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
(
n
u
m
b
e
r
 
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
 
c
a
l
l
 
s
t
a
c
k
 
m
e
n
t
a
l
l
y
 
f
o
r
 
e
a
c
h
 
q
u
e
s
t
i
o
n
.
 
D
r
a
w
 
i
t
 
o
n
 
p
a
p
e
r
 
i
f
 
i
t
 
h
e
l
p
s
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
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
p
r
o
m
p
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
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
b
-
3
"
>
{
p
.
s
n
i
p
p
e
t
}
<
/
C
o
d
e
B
l
o
c
k
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
p
.
o
p
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
o
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
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
b
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
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
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
o
r
d
e
r
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
!
=
=
 
n
u
l
l
 
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
{
p
.
e
x
p
l
a
i
n
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
S
t
a
c
k
 
o
v
e
r
f
l
o
w
:
 
t
o
o
 
m
a
n
y
 
f
r
a
m
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
c
o
m
p
u
t
e
r
 
h
a
s
 
a
 
l
i
m
i
t
e
d
 
a
m
o
u
n
t
 
o
f
 
s
t
a
c
k
 
m
e
m
o
r
y
.
 
I
f
 
r
e
c
u
r
s
i
o
n
 
g
o
e
s
 
t
o
o
 
d
e
e
p
,
 
t
h
e


 
 
 
 
 
 
 
 
 
 
s
t
a
c
k
 
f
i
l
l
s
 
u
p
 
a
n
d
 
t
h
e
 
p
r
o
g
r
a
m
 
c
r
a
s
h
e
s
.
 
T
h
i
s
 
c
r
a
s
h
 
i
s
 
c
a
l
l
e
d
 
a
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
I
n
 
p
r
a
c
t
i
c
e
,
 
m
o
s
t
 
l
a
n
g
u
a
g
e
s
 
a
l
l
o
w
 
a
 
f
e
w
 
t
h
o
u
s
a
n
d
 
t
o
 
t
e
n
s
 
o
f
 
t
h
o
u
s
a
n
d
s
 
o
f
 
f
r
a
m
e
s


 
 
 
 
 
 
 
 
 
 
b
e
f
o
r
e
 
o
v
e
r
f
l
o
w
i
n
g
.
 
F
o
r
 
n
 
=
 
1
0
0
,
0
0
0
 
i
n
 
a
 
r
e
c
u
r
s
i
v
e
 
l
o
o
p
,
 
t
h
a
t
 
i
s
 
t
o
o
 
d
e
e
p
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
i
x
:
 
c
o
n
v
e
r
t
 
d
e
e
p
 
r
e
c
u
r
s
i
o
n
 
t
o
 
i
t
e
r
a
t
i
o
n
 
(
a
n
 
e
x
p
l
i
c
i
t
 
l
o
o
p
)
,
 
o
r
 
u
s
e
 
t
a
i
l
-
c
a
l
l


 
 
 
 
 
 
 
 
 
 
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
 
i
f
 
y
o
u
r
 
l
a
n
g
u
a
g
e
 
s
u
p
p
o
r
t
s
 
i
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
W
h
y
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
 
m
a
k
e
s
 
r
e
c
u
r
s
i
o
n
 
e
a
s
y
 
t
o
 
r
e
a
s
o
n
 
a
b
o
u
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
R
e
c
u
r
s
i
o
n
,
 
a
 
f
u
n
c
t
i
o
n
 
c
a
l
l
i
n
g
 
i
t
s
e
l
f
,
 
s
o
u
n
d
s
 
i
n
t
i
m
i
d
a
t
i
n
g
.
 
B
u
t
 
i
f
 
y
o
u
 
a
l
w
a
y
s
 
t
h
i
n
k


 
 
 
 
 
 
 
 
 
 
i
n
 
t
e
r
m
s
 
o
f
 
f
r
a
m
e
s
,
 
i
t
 
i
s
 
j
u
s
t
 
a
 
s
e
r
i
e
s
 
o
f
 
f
u
n
c
t
i
o
n
 
c
a
l
l
s
 
s
t
a
c
k
e
d
 
u
p
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
m
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
 
e
a
c
h
 
f
r
a
m
e
 
i
s
 
a
 
s
e
p
a
r
a
t
e
 
u
n
i
v
e
r
s
e
 
w
i
t
h
 
i
t
s
 
o
w
n
 
c
o
p
y
 
o
f
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
b
l
e
.
 
W
h
e
n
 
i
t
 
r
e
t
u
r
n
s
,
 
i
t
 
h
a
n
d
s
 
a
 
v
a
l
u
e
 
b
a
c
k
 
t
o
 
t
h
e
 
f
r
a
m
e
 
b
e
l
o
w
.
 
Y
o
u
 
n
e
v
e
r
 
h
a
v
e


 
 
 
 
 
 
 
 
 
 
t
o
 
t
h
i
n
k
 
a
b
o
u
t
 
a
l
l
 
f
r
a
m
e
s
 
a
t
 
o
n
c
e
,
 
j
u
s
t
 
t
h
e
 
o
n
e
 
o
n
 
t
o
p
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
h
i
s
 
w
i
l
l
 
m
a
k
e
 
L
e
v
e
l
 
6
 
(
R
e
c
u
r
s
i
o
n
)
 
f
e
e
l
 
n
a
t
u
r
a
l
 
r
a
t
h
e
r
 
t
h
a
n
 
m
a
g
i
c
a
l
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
L
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
d
i
e
 
w
i
t
h
 
t
h
e
 
f
r
a
m
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
W
h
e
n
 
a
 
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
t
u
r
n
s
 
a
n
d
 
i
t
s
 
f
r
a
m
e
 
i
s
 
p
o
p
p
e
d
,
 
e
v
e
r
y
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
 
i
n
s
i
d
e
 
t
h
a
t


 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
 
i
s
 
d
e
a
l
l
o
c
a
t
e
d
 
(
f
r
e
e
d
)
.
 
T
w
o
 
c
a
l
l
s
 
t
o
 
t
h
e
 
s
a
m
e
 
f
u
n
c
t
i
o
n
 
n
e
v
e
r
 
s
h
a
r
e
 
v
a
r
i
a
b
l
e
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>
{
"
f
u
n
c
t
i
o
n
 
c
o
u
n
t
e
r
(
)
:
\
n
 
 
x
 
=
 
0
 
 
 
 
 
 
 
 
 
 
#
 
x
 
i
s
 
b
o
r
n
\
n
 
 
x
 
=
 
x
 
+
 
1
\
n
 
 
r
e
t
u
r
n
 
x
 
 
 
 
 
 
 
#
 
x
 
d
i
e
s
 
h
e
r
e
\
n
\
n
c
o
u
n
t
e
r
(
)
 
 
#
 
r
e
t
u
r
n
s
 
1
\
n
c
o
u
n
t
e
r
(
)
 
 
#
 
a
l
s
o
 
r
e
t
u
r
n
s
 
1
,
 
x
 
s
t
a
r
t
s
 
f
r
e
s
h
"
}
<
/
C
o
d
e
B
l
o
c
k
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
i
s
 
w
h
y
 
r
e
c
u
r
s
i
v
e
 
c
a
l
l
s
 
a
r
e
 
s
a
f
e
,
 
e
a
c
h
 
c
a
l
l
 
g
e
t
s
 
a
 
f
r
e
s
h
 
c
o
p
y
 
o
f
 
i
t
s
 
o
w
n


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
,
 
c
o
m
p
l
e
t
e
l
y
 
i
s
o
l
a
t
e
d
 
f
r
o
m
 
t
h
e
 
o
t
h
e
r
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
l
l
o
u
t
>


 
 
 
 
 
 
 
 
R
e
c
u
r
s
i
o
n
 
i
s
 
i
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
 
c
a
t
n
i
p
.
 
T
h
e
 
f
r
a
m
e
 
m
o
d
e
l
 
i
s
 
t
h
e
 
o
n
l
y
 
w
a
y
 
t
o
 
r
e
a
s
o
n
 
a
b
o
u
t
 
i
t


 
 
 
 
 
 
 
 
w
i
t
h
o
u
t
 
y
o
u
r
 
h
e
a
d
 
s
p
i
n
n
i
n
g
.
 
D
r
a
w
 
t
h
e
 
s
t
a
c
k
 
o
n
 
a
 
w
h
i
t
e
b
o
a
r
d
,
 
i
t
 
w
o
r
k
s
 
e
v
e
r
y
 
t
i
m
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
 
 
E
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
0
_
F
u
n
c
t
i
o
n
s
C
a
l
l
S
t
a
c
k
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
a
t
 
i
s
 
a
 
s
t
a
c
k
 
f
r
a
m
e
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
A
 
l
o
o
p
 
t
h
a
t
 
r
u
n
s
 
o
n
c
e
"
,


 
 
 
 
 
 
 
 
"
A
 
c
h
u
n
k
 
o
f
 
m
e
m
o
r
y
 
h
o
l
d
i
n
g
 
o
n
e
 
f
u
n
c
t
i
o
n
 
c
a
l
l
'
s
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
a
n
d
 
p
a
r
a
m
e
t
e
r
s
"
,


 
 
 
 
 
 
 
 
"
A
 
g
l
o
b
a
l
 
v
a
r
i
a
b
l
e
 
s
h
a
r
e
d
 
b
e
t
w
e
e
n
 
a
l
l
 
f
u
n
c
t
i
o
n
s
"
,


 
 
 
 
 
 
 
 
"
A
 
t
y
p
e
 
o
f
 
e
r
r
o
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
A
 
s
t
a
c
k
 
f
r
a
m
e
 
(
a
c
t
i
v
a
t
i
o
n
 
r
e
c
o
r
d
)
 
h
o
l
d
s
 
t
h
e
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
s
,
 
p
a
r
a
m
e
t
e
r
s
,
 
a
n
d
 
r
e
t
u
r
n
 
a
d
d
r
e
s
s
 
f
o
r
 
a
 
s
i
n
g
l
e
 
f
u
n
c
t
i
o
n
 
c
a
l
l
.
 
I
t
 
i
s
 
c
r
e
a
t
e
d
 
o
n
 
c
a
l
l
 
a
n
d
 
d
e
s
t
r
o
y
e
d
 
o
n
 
r
e
t
u
r
n
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
Y
o
u
 
c
a
l
l
 
f
a
c
t
o
r
i
a
l
(
4
)
.
 
H
o
w
 
m
a
n
y
 
f
r
a
m
e
s
 
a
r
e
 
o
n
 
t
h
e
 
s
t
a
c
k
 
a
t
 
t
h
e
 
d
e
e
p
e
s
t
 
p
o
i
n
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
3
"
,
 
"
4
"
,
 
"
5
"
,
 
"
6
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
f
a
c
t
o
r
i
a
l
(
4
)
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
3
)
,
 
w
h
i
c
h
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
2
)
,
 
w
h
i
c
h
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
1
)
,
 
w
h
i
c
h
 
c
a
l
l
s
 
f
a
c
t
o
r
i
a
l
(
0
)
.
 
T
h
a
t
 
i
s
 
5
 
a
c
t
i
v
e
 
f
r
a
m
e
s
:
 
f
a
c
t
o
r
i
a
l
(
4
)
 
t
h
r
o
u
g
h
 
f
a
c
t
o
r
i
a
l
(
0
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
a
t
 
h
a
p
p
e
n
s
 
t
o
 
a
 
f
u
n
c
t
i
o
n
'
s
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
a
f
t
e
r
 
i
t
 
r
e
t
u
r
n
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
T
h
e
y
 
p
e
r
s
i
s
t
 
f
o
r
 
t
h
e
 
n
e
x
t
 
c
a
l
l
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
b
e
c
o
m
e
 
g
l
o
b
a
l
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
 
d
e
s
t
r
o
y
e
d
 
a
l
o
n
g
 
w
i
t
h
 
t
h
e
 
s
t
a
c
k
 
f
r
a
m
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
r
e
s
e
t
 
t
o
 
z
e
r
o
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
L
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
l
i
v
e
 
i
n
s
i
d
e
 
t
h
e
 
s
t
a
c
k
 
f
r
a
m
e
.
 
W
h
e
n
 
t
h
e
 
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
t
u
r
n
s
 
a
n
d
 
t
h
e
 
f
r
a
m
e
 
i
s
 
p
o
p
p
e
d
,
 
t
h
o
s
e
 
v
a
r
i
a
b
l
e
s
 
a
r
e
 
g
o
n
e
.
 
E
a
c
h
 
n
e
w
 
c
a
l
l
 
g
e
t
s
 
a
 
f
r
e
s
h
 
f
r
a
m
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
 
r
e
c
u
r
s
i
v
e
 
f
u
n
c
t
i
o
n
 
h
a
s
 
n
o
 
b
a
s
e
 
c
a
s
e
.
 
W
h
a
t
 
h
a
p
p
e
n
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
I
t
 
r
e
t
u
r
n
s
 
u
n
d
e
f
i
n
e
d
"
,


 
 
 
 
 
 
 
 
"
I
t
 
r
u
n
s
 
e
x
a
c
t
l
y
 
n
 
t
i
m
e
s
"
,


 
 
 
 
 
 
 
 
"
I
t
 
c
a
u
s
e
s
 
a
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
"
,


 
 
 
 
 
 
 
 
"
I
t
 
l
o
o
p
s
 
f
o
r
e
v
e
r
 
w
i
t
h
o
u
t
 
c
r
a
s
h
i
n
g
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
W
i
t
h
o
u
t
 
a
 
b
a
s
e
 
c
a
s
e
,
 
e
a
c
h
 
c
a
l
l
 
p
u
s
h
e
s
 
a
 
n
e
w
 
f
r
a
m
e
 
f
o
r
e
v
e
r
.
 
E
v
e
n
t
u
a
l
l
y
 
t
h
e
 
s
t
a
c
k
 
r
u
n
s
 
o
u
t
 
o
f
 
m
e
m
o
r
y
 
a
n
d
 
t
h
e
 
p
r
o
g
r
a
m
 
c
r
a
s
h
e
s
 
w
i
t
h
 
a
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
 
e
r
r
o
r
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
w
o
 
s
e
p
a
r
a
t
e
 
c
a
l
l
s
 
t
o
 
t
h
e
 
s
a
m
e
 
f
u
n
c
t
i
o
n
 
s
h
a
r
e
 
t
h
e
i
r
 
l
o
c
a
l
 
v
a
r
i
a
b
l
e
s
,
 
t
r
u
e
 
o
r
 
f
a
l
s
e
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
r
u
e
,
 
t
h
e
y
 
u
s
e
 
t
h
e
 
s
a
m
e
 
f
r
a
m
e
"
,


 
 
 
 
 
 
 
 
"
F
a
l
s
e
,
 
e
a
c
h
 
c
a
l
l
 
g
e
t
s
 
i
t
s
 
o
w
n
 
s
e
p
a
r
a
t
e
 
f
r
a
m
e
"
,


 
 
 
 
 
 
 
 
"
T
r
u
e
,
 
i
f
 
t
h
e
 
p
a
r
a
m
e
t
e
r
s
 
a
r
e
 
t
h
e
 
s
a
m
e
"
,


 
 
 
 
 
 
 
 
"
D
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
 
l
a
n
g
u
a
g
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
E
a
c
h
 
f
u
n
c
t
i
o
n
 
c
a
l
l
 
c
r
e
a
t
e
s
 
a
 
c
o
m
p
l
e
t
e
l
y
 
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
 
s
t
a
c
k
 
f
r
a
m
e
.
 
L
o
c
a
l
 
v
a
r
i
a
b
l
e
s
 
i
n
 
o
n
e
 
c
a
l
l
 
a
r
e
 
i
n
v
i
s
i
b
l
e
 
t
o
 
a
l
l
 
o
t
h
e
r
 
c
a
l
l
s
,
 
e
v
e
n
 
c
a
l
l
s
 
t
o
 
t
h
e
 
s
a
m
e
 
f
u
n
c
t
i
o
n
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
F
u
n
c
t
i
o
n
s
 
&
 
t
h
e
 
C
a
l
l
 
S
t
a
c
k
"


 
 
 
 
 
 
l
e
v
e
l
=
{
0
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
R
e
c
u
r
s
i
o
n
 
i
s
 
i
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
 
c
a
t
n
i
p
.
 
T
h
e
 
f
r
a
m
e
 
m
o
d
e
l
 
i
s
 
t
h
e
 
o
n
l
y
 
w
a
y
 
t
o
 
r
e
a
s
o
n
 
a
b
o
u
t
 
i
t
 
w
i
t
h
o
u
t
 
y
o
u
r
 
h
e
a
d
 
s
p
i
n
n
i
n
g
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
I
n
p
u
t
s
,
 
C
o
n
s
t
r
a
i
n
t
s
 
&
 
E
d
g
e
 
C
a
s
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


